import { type Generated, type ColumnType } from 'kysely';

export interface InventoryTable {
  id: Generated<number>;
  product_id: number;
  location_id: number;
  quantity_on_hand: ColumnType<number, number | undefined, number>;
  low_stock_threshold: number | null;
  last_stocktake_date: Date | null;
  created_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
  updated_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
}
