import { type Generated, type ColumnType } from 'kysely';

export interface SuppliersTable {
  id: Generated<number>;
  business_id: number;
  name: string;
  nit: string | null;
  contact_person: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  created_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
  updated_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
}
