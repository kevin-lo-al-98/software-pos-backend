import { type Generated, type ColumnType } from 'kysely';

export interface PurchaseOrderItemsTable {
  id: Generated<number>;
  purchase_order_id: number;
  product_id: number;
  quantity_ordered: number;
  quantity_received: ColumnType<number | null, number | undefined, number | undefined>;
  unit_cost: number;
  subtotal: number | null;
}
