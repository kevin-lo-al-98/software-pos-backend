import { type Generated, type ColumnType } from 'kysely';

export interface ProductsTable {
  id: Generated<number>;
  business_id: number;
  category_id: number | null;
  name: string;
  description: string | null;
  sku: string | null;
  barcode: string | null;
  product_type: string;
  unit_price_cost: number | null;
  unit_price_sale_pre_tax: number;
  image_url: string | null;
  manages_inventory: ColumnType<boolean | null, boolean | undefined, boolean | undefined>;
  is_active: ColumnType<boolean | null, boolean | undefined, boolean | undefined>;
  created_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
  updated_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
}
