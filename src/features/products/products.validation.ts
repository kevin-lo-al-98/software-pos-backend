import { object, string, number, minLength, minValue, optional, boolean, literal, union, pipe, type InferOutput } from 'valibot';

// Tipos para product_type para mayor seguridad
const ProductTypeSchema = union([
    literal('GOODS'),
    literal('SERVICE')
], 'El tipo de producto debe ser GOODS o SERVICE.');

export const createProductSchema = object({
    // Campos obligatorios según el esquema SQL (NOT NULL y sin DEFAULT que permita omisión)
    business_id: pipe(
        number('El ID del negocio es requerido.'), // Mensaje para la validación base de tipo
        minValue(1, 'El ID del negocio debe ser un número positivo.')
    ),
    name: pipe(
        string('El nombre del producto es requerido.'), // Mensaje para la validación base de tipo
        minLength(1, 'El nombre del producto no puede estar vacío.')
    ),
    product_type: ProductTypeSchema,
    unit_price_sale_pre_tax: pipe(
        number('El precio de venta antes de impuestos es requerido.'), // Mensaje para la validación base de tipo
        minValue(0, 'El precio de venta debe ser cero o positivo.')
    ),

    // Campos opcionales (NULLABLE en SQL o con DEFAULT que permite omisión en creación)
    category_id: optional(pipe(number(), minValue(1, 'El ID de categoría debe ser positivo.'))),
    description: optional(string()),
    sku: optional(string()),
    barcode: optional(string()),
    unit_price_cost: optional(pipe(number(), minValue(0, 'El precio de costo debe ser cero o positivo.'))),
    image_url: optional(pipe(string() /* , add URL validation here if needed */)),
    manages_inventory: optional(boolean('Debe ser un valor booleano (true/false).')),
    is_active: optional(boolean('Debe ser un valor booleano (true/false).')),
});

// Para inferir el tipo de salida del esquema
export type CreateProductInput = InferOutput<typeof createProductSchema>;


// Esquema para actualizar un producto (todos los campos son opcionales)
export const updateProductSchema = object({
    business_id: optional(pipe(number(), minValue(1, 'El ID del negocio debe ser un número positivo.'))),
    name: optional(pipe(string(), minLength(1, 'El nombre no puede estar vacío.'))),
    category_id: optional(pipe(number(), minValue(1, 'El ID de categoría debe ser positivo.'))),
    description: optional(string()),
    sku: optional(string()),
    barcode: optional(string()),
    product_type: optional(ProductTypeSchema),
    unit_price_cost: optional(pipe(number(), minValue(0, 'El precio de costo debe ser cero o positivo.'))),
    unit_price_sale_pre_tax: optional(pipe(number(), minValue(0, 'El precio de venta debe ser cero o positivo.'))),
    image_url: optional(string()),
    manages_inventory: optional(boolean()),
    is_active: optional(boolean()),
});

export type UpdateProductInput = InferOutput<typeof updateProductSchema>;
