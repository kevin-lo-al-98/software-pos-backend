import { type Generated, type ColumnType } from 'kysely';

export interface SaleItemTaxesTable {
  id: Generated<number>;
  sale_item_id: number;
  tax_rate_id: number;
  tax_name_at_sale: string;
  tax_rate_at_sale: number;
  taxable_base_amount: number;
  calculated_tax_amount: number;
}
