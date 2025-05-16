import { type Generated, type ColumnType } from 'kysely';

export interface SaleItemsTable {
  id: Generated<number>;
  sale_id: number;
  product_id: number;
  quantity: number;
  unit_price_at_sale: number;
  discount_percentage_item: ColumnType<number | null, number | undefined, number | undefined>;
  discount_amount_item: ColumnType<number | null, number | undefined, number | undefined>;
  tax_amount_item: number;
  subtotal_item: number;
  notes: string | null;
}
