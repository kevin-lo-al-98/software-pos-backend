import { type Generated, type ColumnType } from 'kysely';

export interface RolesTable {
  id: Generated<number>;
  business_id: number | null;
  name: string;
  description: string | null;
  created_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
  updated_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
}
