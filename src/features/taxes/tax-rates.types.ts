import { type Generated, type ColumnType } from 'kysely';

export interface TaxRatesTable {
  id: Generated<number>;
  tax_id: number;
  business_id: number | null;
  rate: number;
  description: string | null;
  is_active: ColumnType<boolean | null, boolean | undefined, boolean | undefined>;
  start_date: Date | null;
  end_date: Date | null;
  created_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
  updated_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
}
