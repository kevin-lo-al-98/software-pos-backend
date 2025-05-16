import { type Generated, type ColumnType } from 'kysely';

export interface PaymentsTable {
  id: Generated<number>;
  sale_id: number;
  payment_method_id: number;
  amount_paid: number;
  payment_date: ColumnType<Date, Date | undefined, Date>;
  transaction_reference: string | null;
  notes: string | null;
  created_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
  updated_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
}
