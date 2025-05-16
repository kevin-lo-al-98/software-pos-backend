import { type Generated, type ColumnType } from 'kysely';

export interface LocationsTable {
  id: Generated<number>;
  business_id: number;
  name: string;
  address: string | null;
  city: string | null;
  phone: string | null;
  is_active: ColumnType<boolean | null, boolean | undefined, boolean | undefined>;
  created_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
  updated_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
}
