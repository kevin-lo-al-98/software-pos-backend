import { type Generated, type ColumnType } from 'kysely';

export interface InvoicesTable {
  id: Generated<number>;
  sale_id: number;
  business_id: number;
  invoice_number: string;
  issue_date: Date;
  due_date: Date | null;
  dian_cufe: string | null;
  dian_qr_data: string | null;
  dian_status: string;
  dian_response_message: string | null;
  xml_file_path: string | null;
  pdf_file_path: string | null;
  notes: string | null;
  created_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
  updated_at: ColumnType<Date | null, Date | undefined, Date | undefined>;
}
