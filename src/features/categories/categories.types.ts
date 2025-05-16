import { type Generated, type ColumnType } from 'kysely';

export interface CategoriesTable {
  id: Generated<number>;
  business_id: number;
  name: string;
  description: string | null;
  parent_category_id: number | null;
  created_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
  updated_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
}
