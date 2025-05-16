import { type Generated, type ColumnType } from 'kysely';

export interface SalesTable {
  id: Generated<number>;
  business_id: number;
  location_id: number;
  user_id: number;
  customer_id: number | null;
  sale_date: ColumnType<Date, Date | undefined, Date>;
  subtotal_amount: number;
  discount_amount: ColumnType<number | null, number | undefined, number | undefined>;
  tax_amount: number;
  total_amount: number;
  status: string;
  notes: string | null;
  created_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
  updated_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
}
