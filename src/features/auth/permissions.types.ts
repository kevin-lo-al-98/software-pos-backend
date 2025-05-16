import { type Generated, type ColumnType } from 'kysely';

export interface PermissionsTable {
  id: Generated<number>;
  name: string;
  description: string | null;
  created_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
}
