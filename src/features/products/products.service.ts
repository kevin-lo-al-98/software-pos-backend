import { db } from '../../db/kysely'; // Ajusta la ruta a tu instancia de Kysely
import type {
    CreateProductInput,
    UpdateProductInput,
} from './products.validation'; // Ajusta la ruta a tus tipos de validación
import type { ProductsTable } from './products.types'; // Ajusta la ruta a tus tipos de DB
import type { Insertable, Updateable, Selectable } from 'kysely';

// El tipo de producto que el servicio devolverá (puede ser el tipo de tabla completo o un DTO)
export type ProductOutput = Selectable<ProductsTable>;

// El tipo de producto para inserción (Kysely se encarga de los campos generados)
type ProductInsert = Insertable<ProductsTable>;
// El tipo de producto para actualización
type ProductUpdate = Updateable<ProductsTable>;

/**
 * Crea un nuevo producto en la base de datos.
 * @param productData - Los datos validados para el nuevo producto.
 * @param env - (Opcional) El entorno de Hono/Worker, si es necesario para la conexión a la DB.
 * @returns El producto creado.
 */
export const createProduct = async (
    productData: CreateProductInput,
    // env: any // Descomenta si necesitas pasar 'env' para la conexión a la DB
): Promise<ProductOutput> => {
    // Mapea los datos de entrada al formato esperado por la tabla 'products'
    // Kysely manejará los campos 'id', 'created_at', 'updated_at' si son generados o tienen defaults.
    const productToInsert: Omit<ProductInsert, 'id' | 'created_at' | 'updated_at'> = {
        ...productData,
        // Los campos como is_active y manages_inventory usarán el default de la DB
        // si no se proveen en productData y son opcionales en CreateProductInput.
        // Si son obligatorios en la tabla y no tienen default, deben estar en CreateProductInput.
        is_active: productData.is_active ?? true, // Asume default si no se provee
        manages_inventory: productData.manages_inventory ?? true, // Asume default
    };

    const newProduct = await db
        .insertInto('products')
        .values(productToInsert as ProductInsert) // Kysely necesita el tipo completo
        .returningAll() // Devuelve todas las columnas del producto insertado
        .executeTakeFirstOrThrow(); // Lanza un error si la inserción falla por alguna razón

    return newProduct;
};

/**
 * Obtiene todos los productos de la base de datos.
 * @param env - (Opcional) El entorno de Hono/Worker.
 * @returns Un array de productos.
 */
export const findAllProducts = async (
    // env: any // Descomenta si necesitas pasar 'env'
): Promise<ProductOutput[]> => {
    const products = await db.selectFrom('products').selectAll().execute();
    return products;
};

/**
 * Encuentra un producto por su ID.
 * @param id - El ID del producto a buscar.
 * @param env - (Opcional) El entorno de Hono/Worker.
 * @returns El producto encontrado o undefined si no existe.
 */
export const findProductById = async (
    id: number,
    // env: any // Descomenta si necesitas pasar 'env'
): Promise<ProductOutput | undefined> => {
    const product = await db
        .selectFrom('products')
        .selectAll()
        .where('id', '=', id)
        .executeTakeFirst(); // Devuelve el primer resultado o undefined

    return product;
};

/**
 * Actualiza un producto existente en la base de datos.
 * @param id - El ID del producto a actualizar.
 * @param productData - Los datos validados para actualizar el producto.
 * @param env - (Opcional) El entorno de Hono/Worker.
 * @returns El producto actualizado o undefined si no se encontró.
 */
export const updateProduct = async (
    id: number,
    productData: UpdateProductInput,
    // env: any // Descomenta si necesitas pasar 'env'
): Promise<ProductOutput | undefined> => {
    if (Object.keys(productData).length === 0) {
        // Si no hay datos para actualizar, podríamos devolver el producto actual o un error.
        // Por ahora, devolvemos el producto actual.
        return findProductById(id);
    }

    const productToUpdate: ProductUpdate = {
        ...productData,
        updated_at: new Date(), // Actualiza explícitamente updated_at
    };

    const updatedProduct = await db
        .updateTable('products')
        .set(productToUpdate)
        .where('id', '=', id)
        .returningAll()
        .executeTakeFirst(); // Devuelve el producto actualizado o undefined si no se encontró

    return updatedProduct;
};

/**
 * Elimina un producto de la base de datos.
 * @param id - El ID del producto a eliminar.
 * @param env - (Opcional) El entorno de Hono/Worker.
 * @returns true si el producto fue eliminado, false en caso contrario.
 */
export const removeProduct = async (
    id: number,
    // env: any // Descomenta si necesitas pasar 'env'
): Promise<boolean> => {
    const result = await db
        .deleteFrom('products')
        .where('id', '=', id)
        .executeTakeFirst(); // executeTakeFirst() para DELETE devuelve un objeto con numDeletedRows

    return result.numDeletedRows > 0; // Kysely 0.23+ usa numAffectedRows o numDeletedRows
    // Para versiones anteriores, podría ser result.rowCount > 0
};
