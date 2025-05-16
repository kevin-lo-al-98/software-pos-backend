import { type Generated, type ColumnType } from 'kysely';

export interface SubscriptionPlansTable {
  id: Generated<number>;
  name: string;
  price_monthly: number;
  price_annually: number | null;
  max_users: number | null;
  max_locations: number | null;
  max_products: number | null;
  max_invoices_monthly: number | null;
  features: string | null;
  is_active: ColumnType<boolean | null, boolean | undefined, boolean | undefined>;
  created_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
  updated_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
}
