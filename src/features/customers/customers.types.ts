import { type Generated, type ColumnType } from 'kysely';

export interface CustomersTable {
  id: Generated<number>;
  business_id: number;
  first_name: string | null;
  last_name: string | null;
  company_name: string | null;
  identification_type: string | null;
  identification_number: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  city: string | null;
  is_taxpayer_type: string | null;
  created_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
  updated_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
}
