import { type Generated, type ColumnType } from 'kysely';

export interface BusinessesTable {
  id: Generated<number>;
  name: string;
  legal_name: string | null;
  nit: string;
  address: string | null;
  city: string | null;
  department: string | null;
  phone: string | null;
  email: string | null;
  logo_url: string | null;
  dian_software_id: string | null;
  dian_technical_key: string | null;
  dian_test_set_id: string | null;
  invoice_resolution: string | null;
  currency_code: ColumnType<string | null, string | undefined, string | undefined>;
  timezone: ColumnType<string | null, string | undefined, string | undefined>;
  is_active: ColumnType<boolean | null, boolean | undefined, boolean | undefined>;
  subscription_plan_id: number | null;
  created_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
  updated_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
}
