import { Client } from 'pg';

export function getDbClient(env: { DATABASE_URL: string }) {
    // Asegúrate de que DATABASE_URL esté definida en c.env
    if (!env.DATABASE_URL) {
        throw new Error('DATABASE_URL no está configurada');
    }
    const client = new Client({
        connectionString: env.DATABASE_URL,
        // Considera opciones de SSL según tu proveedor de DB
        // ssl: { rejectUnauthorized: false } // Para algunos servicios, o configura certificados
    });
    return client;
}