import { type Generated, type ColumnType } from 'kysely';

export interface UsersTable {
  id: Generated<number>;
  business_id: number;
  role_id: number | null;
  first_name: string;
  last_name: string;
  email: string;
  password_hash: string;
  phone: string | null;
  is_active: ColumnType<boolean | null, boolean | undefined, boolean | undefined>;
  last_login_at: Date | null;
  created_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
  updated_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
}
