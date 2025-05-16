import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import type { Database } from './database.interface'; // O la ruta a tu archivo de interfaz Database

const dialect = new PostgresDialect({
    pool: new Pool({
        connectionString: process.env.DATABASE_URL,
    }),
});

export const db = new Kysely<Database>({
    dialect,
});


// Esta función crea una nueva instancia del dialecto.
// Es útil si necesitas obtener la DATABASE_URL desde c.env en cada solicitud,
// lo cual es común si usas bindings de Worker para la URL o para Hyperdrive.
// Sin embargo, para un pool de conexiones, usualmente se crea una vez.
const createDialect = (databaseUrl: string) => {
    return new PostgresDialect({
        pool: new Pool({
            connectionString: databaseUrl,
            // Aquí puedes añadir más configuraciones para el pool si es necesario,
            // como max conexiones, timeouts, SSL, etc.
            // ssl: {
            //   rejectUnauthorized: false, // Necesario para algunos proveedores de DB en la nube
            // },
        }),
    });
};

// --- Opción 1: Crear la instancia de Kysely una vez (Singleton) ---
// Esto es común si DATABASE_URL está disponible globalmente al inicio del Worker
// (ej. desde variables de entorno definidas en wrangler.toml o en el dashboard de Cloudflare).

// Obtén la DATABASE_URL. En un Worker, esto vendría de las variables de entorno/secrets.
// Para desarrollo local, Wrangler la tomará de tu archivo .dev.vars.
// Para producción, la configurarás en los secretos del Worker en el dashboard de Cloudflare.
// NOTA: Acceder a process.env directamente no funciona en Cloudflare Workers.
// La forma de obtenerla dependerá de cómo Hono expone 'env' o cómo la pasas.
// Por ahora, asumiremos que la obtienes de alguna manera al inicio.
// Si la URL solo está en c.env, necesitarás un enfoque diferente (ver Opción 2).

let dbInstance: Kysely<Database>;

/**
 * Obtiene la instancia singleton de Kysely.
 * La DATABASE_URL debe estar disponible en el entorno del Worker.
 * @param env - El objeto de entorno del Worker (c.env en Hono) que contiene DATABASE_URL.
 * @returns La instancia de Kysely.
 */
export const getDbInstance = (env: { DATABASE_URL?: string }): Kysely<Database> => {
    if (!env.DATABASE_URL) {
        throw new Error(
            'DATABASE_URL no está definida en las variables de entorno.'
        );
    }

    if (!dbInstance) {
        console.log('Creando nueva instancia de Kysely DB...');
        const dialect = createDialect(env.DATABASE_URL);
        dbInstance = new Kysely<Database>({
            dialect,
        });
    }
    return dbInstance;
};

// --- Opción 2: Si necesitas pasar 'env' desde Hono a cada servicio ---
// En este caso, cada servicio podría llamar a una función como la de arriba
// o podrías instanciar Kysely dentro de un middleware que adjunte 'db' al contexto 'c'.
// Por simplicidad para empezar, la Opción 1 (singleton obtenido con 'env' al inicio)
// es más directa si tu DATABASE_URL está consistentemente disponible.

// Para usar la Opción 1 en tus servicios, importarías `getDbInstance` y la llamarías
// pasándole `c.env` desde tu controlador.
// Ejemplo en product.service.ts:
// export const createProduct = async (productData: CreateProductInput, env: any) => {
//   const db = getDbInstance(env);
//   // ... tu lógica con db ...
// };

// --- Opción Simplificada (si DATABASE_URL está garantizada en el scope global del Worker) ---
// Esta es la forma más común de verla en ejemplos, pero requiere que DATABASE_URL
// sea accesible globalmente cuando este módulo se carga.
// En Cloudflare Workers, esto usualmente significa que está en los bindings del wrangler.toml
// y Hono lo hace disponible en `c.env`.
// Por lo tanto, la función `getDbInstance` que toma `env` es más robusta.

// Para este ejemplo, exportaremos la función `getDbInstance`.
// Tus servicios necesitarán que el controlador les pase `c.env`.

// Si quieres un singleton simple y asumes que `process.env.DATABASE_URL`
// se reemplaza en el build o está disponible de otra forma (lo cual NO es estándar en Workers):
/*
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set.');
}
const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: process.env.DATABASE_URL,
  }),
});
export const db = new Kysely<Database>({
  dialect,
});
*/
