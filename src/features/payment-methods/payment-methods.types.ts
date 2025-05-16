import { type Generated, type ColumnType } from 'kysely';

export interface PaymentMethodsTable {
  id: Generated<number>;
  business_id: number | null;
  name: string;
  type: string;
  requires_reference: ColumnType<boolean | null, boolean | undefined, boolean | undefined>;
  is_active: ColumnType<boolean | null, boolean | undefined, boolean | undefined>;
  created_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
  updated_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
}
