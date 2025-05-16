import { type Context } from 'hono';
import {
    type CreateProductInput,
    type UpdateProductInput,
} from './products.validation';

import * as productService from './products.service';

// Interfaz placeholder para el tipo de producto devuelto por el servicio
// En una implementación real, esto sería Selectable<ProductsTable> de Kysely
interface Product {
    id: number;
    name: string;
    business_id: number;
    product_type: string;
    unit_price_sale_pre_tax: number;
    // ...otros campos del producto
}

// Tipo genérico para el entorno si no tienes bindings específicos definidos
// o si quieres que sea más flexible.
type AppEnv = {
    Bindings?: {
        DATABASE_URL?: string;
        // ... otros bindings que puedas tener
    };
    Variables?: any; // Para c.var si lo usas
};

// Tipo para el contexto con input validado (para POST y PUT)
// P: Path (parámetros de ruta), I: Input (datos validados del cuerpo)
type ValidatedContext<P extends string, I> = Context<AppEnv, P, { json: I }>;


// Controlador para crear un nuevo producto
export const createProductController = async (c: ValidatedContext<'/api/products', CreateProductInput>) => {
    try {
        // c.req.valid('json') ahora debería ser inferido como CreateProductInput
        // debido al tipado de ValidatedContext.
        const validatedData = c.req.valid('json');
        const newProduct = await productService.createProduct(validatedData, c.env);
        return c.json({ message: 'Producto creado exitosamente', data: newProduct }, 201);
    } catch (error: any) {
        console.error('Error en createProductController:', error);
        return c.json({ error: 'No se pudo crear el producto', details: error.message || error }, 500);
    }
};

// Controlador para obtener todos los productos
export const getAllProductsController = async (c: Context<AppEnv>) => {
    try {
        const products = await productService.findAllProducts(c.env);
        return c.json({ message: 'Productos obtenidos exitosamente', data: products });
    } catch (error: any) {
        console.error('Error en getAllProductsController:', error);
        return c.json({ error: 'No se pudieron obtener los productos', details: error.message || error }, 500);
    }
};

// Controlador para obtener un producto por su ID
export const getProductByIdController = async (c: Context<AppEnv, '/api/products/:id'>) => {
    try {
        const idParam = c.req.param('id');
        const id = parseInt(idParam, 10);

        if (isNaN(id)) {
            return c.json({ error: 'El ID del producto debe ser un número válido.' }, 400);
        }
        const product = await productService.findProductById(id, c.env);

        if (!product) {
            return c.json({ error: 'Producto no encontrado' }, 404);
        }
        return c.json({ message: 'Producto obtenido exitosamente', data: product });
    } catch (error: any) {
        console.error('Error en getProductByIdController:', error);
        return c.json({ error: 'No se pudo obtener el producto', details: error.message || error }, 500);
    }
};

// Controlador para actualizar un producto
export const updateProductController = async (c: ValidatedContext<'/api/products/:id', UpdateProductInput>) => {
    try {
        const idParam = c.req.param('id');
        const id = parseInt(idParam, 10);

        if (isNaN(id)) {
            return c.json({ error: 'El ID del producto debe ser un número válido.' }, 400);
        }
        // c.req.valid('json') ahora debería ser inferido como UpdateProductInput
        const validatedData = c.req.valid('json');
        const updatedProduct = await productService.updateProduct(id, validatedData, c.env);

        if (!updatedProduct) {
            return c.json({ error: 'Producto no encontrado para actualizar' }, 404);
        }
        return c.json({ message: 'Producto actualizado exitosamente', data: updatedProduct });
    } catch (error: any) {
        console.error('Error en updateProductController:', error);
        return c.json({ error: 'No se pudo actualizar el producto', details: error.message || error }, 500);
    }
};

// Controlador para eliminar un producto
export const deleteProductController = async (c: Context<AppEnv, '/api/products/:id'>) => {
    try {
        const idParam = c.req.param('id');
        const id = parseInt(idParam, 10);

        if (isNaN(id)) {
            return c.json({ error: 'El ID del producto debe ser un número válido.' }, 400);
        }
        const success = await productService.removeProduct(id, c.env);

        if (!success) {
            return c.json({ error: 'Producto no encontrado para eliminar' }, 404);
        }
        return c.body(null, 204);
    } catch (error: any)
    {
        console.error('Error en deleteProductController:', error);
        return c.json({ error: 'No se pudo eliminar el producto', details: error.message || error }, 500);
    }
};
