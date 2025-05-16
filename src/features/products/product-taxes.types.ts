import { type Generated, type ColumnType } from 'kysely';

export interface ProductTaxesTable {
  product_id: number;
  tax_rate_id: number;
  priority: ColumnType<number | null, number | undefined, number | undefined>;
}
