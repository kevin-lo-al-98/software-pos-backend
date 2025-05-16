import { Hono } from 'hono';
import { vValidator } from '@hono/valibot-validator';
import {
    createProductSchema,
    updateProductSchema,
} from './products.validation'; // Asegúrate que la ruta sea correcta

// Importa tus controladores
import {
    createProductController,
    getAllProductsController,
    getProductByIdController,
    updateProductController,
    deleteProductController
} from './products.controller'; // Asegúrate que la ruta sea correcta

const products = new Hono();

// Ruta para crear un nuevo producto (POST /api/products)
// vValidator ahora manejará la respuesta de error por sí mismo si la validación falla.
products.post(
    '/',
    vValidator('json', createProductSchema), // Middleware de validación
    createProductController // El controlador se encarga de c.req.valid('json')
);

// Ruta para obtener todos los productos (GET /api/products)
products.get('/', getAllProductsController);

// Ruta para obtener un producto específico por ID (GET /api/products/:id)
products.get('/:id', getProductByIdController);

// Ruta para actualizar un producto específico por ID (PUT /api/products/:id)
products.put(
    '/:id',
    vValidator('json', updateProductSchema), // Middleware de validación
    updateProductController // El controlador se encarga de c.req.valid('json')
);

// Ruta para eliminar un producto específico por ID (DELETE /api/products/:id)
products.delete('/:id', deleteProductController);

export default products;
