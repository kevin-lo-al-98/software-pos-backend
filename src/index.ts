import { Hono } from 'hono'
import productsRoutes from "./features/products/products.routes";

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/api/products', productsRoutes);

app.onError((err, c) => {
  console.error(`${err}`);
  return c.json({ error: 'Error interno del servidor' }, 500);
});

export default app
