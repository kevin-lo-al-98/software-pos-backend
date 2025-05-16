import { type Generated, type ColumnType } from 'kysely';

export interface CashRegisterSessionsTable {
  id: Generated<number>;
  business_id: number;
  location_id: number;
  user_id_open: number;
  user_id_close: number | null;
  opened_at: ColumnType<Date, Date | undefined, Date>;
  closed_at: Date | null;
  opening_balance: number;
  closing_balance_calculated: number | null;
  closing_balance_actual: number | null;
  cash_sales_amount: ColumnType<number | null, number | undefined, number | undefined>;
  cash_inflows: ColumnType<number | null, number | undefined, number | undefined>;
  cash_outflows: ColumnType<number | null, number | undefined, number | undefined>;
  difference: number | null;
  status: string;
  notes: string | null;
}
