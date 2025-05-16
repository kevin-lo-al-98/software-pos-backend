import { type Generated, type ColumnType } from 'kysely';

export interface TaxesTable {
  id: Generated<number>;
  business_id: number | null;
  name: string;
  code: string | null;
  is_percentage: ColumnType<boolean | null, boolean | undefined, boolean | undefined>;
  created_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
  updated_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
}
