import { type Generated, type ColumnType } from 'kysely';

export interface PurchaseOrdersTable {
  id: Generated<number>;
  business_id: number;
  supplier_id: number;
  location_id: number;
  order_date: Date;
  expected_delivery_date: Date | null;
  total_amount: number | null;
  status: string;
  notes: string | null;
  created_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
  updated_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
}
