@echo off
setlocal enabledelayedexpansion

REM --- Configuración ---
REM Directorio base donde se crearán los tipos (relativo a la ubicación del script)
set BASE_DIR=src

REM --- Creación de Directorios Base ---
echo Creando directorios base...
if not exist "%BASE_DIR%" mkdir "%BASE_DIR%"
if not exist "%BASE_DIR%\db" mkdir "%BASE_DIR%\db"
if not exist "%BASE_DIR%\features" mkdir "%BASE_DIR%\features"

REM --- Contenido Común para el inicio de cada archivo .types.ts ---
set KSQLY_IMPORT_LINE=import { type Generated, type ColumnType } from 'kysely';

REM --- Definición y Creación de Tipos para cada Feature ---

REM --- Feature: Businesses ---
echo Creando tipos para Businesses...
set FEATURE_NAME=businesses
if not exist "%BASE_DIR%\features\%FEATURE_NAME%" mkdir "%BASE_DIR%\features\%FEATURE_NAME%"
set FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\%FEATURE_NAME%.types.ts
(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface BusinessesTable {
  echo   id: Generated^<number^>;
  echo   name: string;
  echo   legal_name: string ^| null;
  echo   nit: string;
  echo   address: string ^| null;
  echo   city: string ^| null;
  echo   department: string ^| null;
  echo   phone: string ^| null;
  echo   email: string ^| null;
  echo   logo_url: string ^| null;
  echo   dian_software_id: string ^| null;
  echo   dian_technical_key: string ^| null;
  echo   dian_test_set_id: string ^| null;
  echo   invoice_resolution: string ^| null;
  echo   currency_code: ColumnType^<string ^| null, string ^| undefined, string ^| undefined^>;
  echo   timezone: ColumnType^<string ^| null, string ^| undefined, string ^| undefined^>;
  echo   is_active: ColumnType^<boolean ^| null, boolean ^| undefined, boolean ^| undefined^>;
  echo   subscription_plan_id: number ^| null;
  echo   created_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo   updated_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo }
) > "%FILE_PATH%"

REM --- Feature: Cash Registers ---
echo Creando tipos para Cash Registers...
set FEATURE_NAME=cash-registers
if not exist "%BASE_DIR%\features\%FEATURE_NAME%" mkdir "%BASE_DIR%\features\%FEATURE_NAME%"
set FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\%FEATURE_NAME%.types.ts
(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface CashRegisterSessionsTable {
  echo   id: Generated^<number^>;
  echo   business_id: number;
  echo   location_id: number;
  echo   user_id_open: number;
  echo   user_id_close: number ^| null;
  echo   opened_at: ColumnType^<Date, Date ^| undefined, Date^>;
  echo   closed_at: Date ^| null;
  echo   opening_balance: number;
  echo   closing_balance_calculated: number ^| null;
  echo   closing_balance_actual: number ^| null;
  echo   cash_sales_amount: ColumnType^<number ^| null, number ^| undefined, number ^| undefined^>;
  echo   cash_inflows: ColumnType^<number ^| null, number ^| undefined, number ^| undefined^>;
  echo   cash_outflows: ColumnType^<number ^| null, number ^| undefined, number ^| undefined^>;
  echo   difference: number ^| null;
  echo   status: string;
  echo   notes: string ^| null;
  echo }
) > "%FILE_PATH%"

REM --- Feature: Categories ---
echo Creando tipos para Categories...
set FEATURE_NAME=categories
if not exist "%BASE_DIR%\features\%FEATURE_NAME%" mkdir "%BASE_DIR%\features\%FEATURE_NAME%"
set FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\%FEATURE_NAME%.types.ts
(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface CategoriesTable {
  echo   id: Generated^<number^>;
  echo   business_id: number;
  echo   name: string;
  echo   description: string ^| null;
  echo   parent_category_id: number ^| null;
  echo   created_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo   updated_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo }
) > "%FILE_PATH%"

REM --- Feature: Customers ---
echo Creando tipos para Customers...
set FEATURE_NAME=customers
if not exist "%BASE_DIR%\features\%FEATURE_NAME%" mkdir "%BASE_DIR%\features\%FEATURE_NAME%"
set FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\%FEATURE_NAME%.types.ts
(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface CustomersTable {
  echo   id: Generated^<number^>;
  echo   business_id: number;
  echo   first_name: string ^| null;
  echo   last_name: string ^| null;
  echo   company_name: string ^| null;
  echo   identification_type: string ^| null;
  echo   identification_number: string ^| null;
  echo   email: string ^| null;
  echo   phone: string ^| null;
  echo   address: string ^| null;
  echo   city: string ^| null;
  echo   is_taxpayer_type: string ^| null;
  echo   created_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo   updated_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo }
) > "%FILE_PATH%"

REM --- Feature: Inventory ---
echo Creando tipos para Inventory...
set FEATURE_NAME=inventory
if not exist "%BASE_DIR%\features\%FEATURE_NAME%" mkdir "%BASE_DIR%\features\%FEATURE_NAME%"
set FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\%FEATURE_NAME%.types.ts
(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface InventoryTable {
  echo   id: Generated^<number^>;
  echo   product_id: number;
  echo   location_id: number;
  echo   quantity_on_hand: ColumnType^<number, number ^| undefined, number^>;
  echo   low_stock_threshold: number ^| null;
  echo   last_stocktake_date: Date ^| null;
  echo   created_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo   updated_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo }
) > "%FILE_PATH%"

REM --- Feature: Invoices ---
echo Creando tipos para Invoices...
set FEATURE_NAME=invoices
if not exist "%BASE_DIR%\features\%FEATURE_NAME%" mkdir "%BASE_DIR%\features\%FEATURE_NAME%"
set FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\%FEATURE_NAME%.types.ts
(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface InvoicesTable {
  echo   id: Generated^<number^>;
  echo   sale_id: number;
  echo   business_id: number;
  echo   invoice_number: string;
  echo   issue_date: Date;
  echo   due_date: Date ^| null;
  echo   dian_cufe: string ^| null;
  echo   dian_qr_data: string ^| null;
  echo   dian_status: string;
  echo   dian_response_message: string ^| null;
  echo   xml_file_path: string ^| null;
  echo   pdf_file_path: string ^| null;
  echo   notes: string ^| null;
  echo   created_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo   updated_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo }
) > "%FILE_PATH%"

REM --- Feature: Locations ---
echo Creando tipos para Locations...
set FEATURE_NAME=locations
if not exist "%BASE_DIR%\features\%FEATURE_NAME%" mkdir "%BASE_DIR%\features\%FEATURE_NAME%"
set FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\%FEATURE_NAME%.types.ts
(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface LocationsTable {
  echo   id: Generated^<number^>;
  echo   business_id: number;
  echo   name: string;
  echo   address: string ^| null;
  echo   city: string ^| null;
  echo   phone: string ^| null;
  echo   is_active: ColumnType^<boolean ^| null, boolean ^| undefined, boolean ^| undefined^>;
  echo   created_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo   updated_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo }
) > "%FILE_PATH%"

REM --- Feature: Payment Methods ---
echo Creando tipos para Payment Methods...
set FEATURE_NAME=payment-methods
if not exist "%BASE_DIR%\features\%FEATURE_NAME%" mkdir "%BASE_DIR%\features\%FEATURE_NAME%"
set FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\%FEATURE_NAME%.types.ts
(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface PaymentMethodsTable {
  echo   id: Generated^<number^>;
  echo   business_id: number ^| null;
  echo   name: string;
  echo   type: string;
  echo   requires_reference: ColumnType^<boolean ^| null, boolean ^| undefined, boolean ^| undefined^>;
  echo   is_active: ColumnType^<boolean ^| null, boolean ^| undefined, boolean ^| undefined^>;
  echo   created_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo   updated_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo }
) > "%FILE_PATH%"

REM --- Feature: Payments ---
echo Creando tipos para Payments...
set FEATURE_NAME=payments
if not exist "%BASE_DIR%\features\%FEATURE_NAME%" mkdir "%BASE_DIR%\features\%FEATURE_NAME%"
set FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\%FEATURE_NAME%.types.ts
(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface PaymentsTable {
  echo   id: Generated^<number^>;
  echo   sale_id: number;
  echo   payment_method_id: number;
  echo   amount_paid: number;
  echo   payment_date: ColumnType^<Date, Date ^| undefined, Date^>;
  echo   transaction_reference: string ^| null;
  echo   notes: string ^| null;
  echo   created_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo   updated_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo }
) > "%FILE_PATH%"

REM --- Feature: Auth (Permissions, Roles, RolePermissions) ---
echo Creando tipos para Auth...
set FEATURE_NAME=auth
if not exist "%BASE_DIR%\features\%FEATURE_NAME%" mkdir "%BASE_DIR%\features\%FEATURE_NAME%"
set PERMISSIONS_FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\permissions.types.ts
set ROLES_FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\roles.types.ts
set ROLE_PERMISSIONS_FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\role-permissions.types.ts

(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface PermissionsTable {
  echo   id: Generated^<number^>;
  echo   name: string;
  echo   description: string ^| null;
  echo   created_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo }
) > "%PERMISSIONS_FILE_PATH%"

(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface RolesTable {
  echo   id: Generated^<number^>;
  echo   business_id: number ^| null;
  echo   name: string;
  echo   description: string ^| null;
  echo   created_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo   updated_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo }
) > "%ROLES_FILE_PATH%"

(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface RolePermissionsTable {
  echo   role_id: number;
  echo   permission_id: number;
  echo }
) > "%ROLE_PERMISSIONS_FILE_PATH%"


REM --- Feature: Products (ProductsTable, ProductTaxesTable) ---
echo Creando tipos para Products...
set FEATURE_NAME=products
if not exist "%BASE_DIR%\features\%FEATURE_NAME%" mkdir "%BASE_DIR%\features\%FEATURE_NAME%"
set PRODUCTS_FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\products.types.ts
set PRODUCT_TAXES_FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\product-taxes.types.ts

(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface ProductsTable {
  echo   id: Generated^<number^>;
  echo   business_id: number;
  echo   category_id: number ^| null;
  echo   name: string;
  echo   description: string ^| null;
  echo   sku: string ^| null;
  echo   barcode: string ^| null;
  echo   product_type: string;
  echo   unit_price_cost: number ^| null;
  echo   unit_price_sale_pre_tax: number;
  echo   image_url: string ^| null;
  echo   manages_inventory: ColumnType^<boolean ^| null, boolean ^| undefined, boolean ^| undefined^>;
  echo   is_active: ColumnType^<boolean ^| null, boolean ^| undefined, boolean ^| undefined^>;
  echo   created_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo   updated_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo }
) > "%PRODUCTS_FILE_PATH%"

(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface ProductTaxesTable {
  echo   product_id: number;
  echo   tax_rate_id: number;
  echo   priority: ColumnType^<number ^| null, number ^| undefined, number ^| undefined^>;
  echo }
) > "%PRODUCT_TAXES_FILE_PATH%"

REM --- Feature: Purchases (PurchaseOrdersTable, PurchaseOrderItemsTable) ---
echo Creando tipos para Purchases...
set FEATURE_NAME=purchases
if not exist "%BASE_DIR%\features\%FEATURE_NAME%" mkdir "%BASE_DIR%\features\%FEATURE_NAME%"
set PURCHASE_ORDERS_FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\purchase-orders.types.ts
set PURCHASE_ORDER_ITEMS_FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\purchase-order-items.types.ts

(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface PurchaseOrdersTable {
  echo   id: Generated^<number^>;
  echo   business_id: number;
  echo   supplier_id: number;
  echo   location_id: number;
  echo   order_date: Date;
  echo   expected_delivery_date: Date ^| null;
  echo   total_amount: number ^| null;
  echo   status: string;
  echo   notes: string ^| null;
  echo   created_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo   updated_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo }
) > "%PURCHASE_ORDERS_FILE_PATH%"

(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface PurchaseOrderItemsTable {
  echo   id: Generated^<number^>;
  echo   purchase_order_id: number;
  echo   product_id: number;
  echo   quantity_ordered: number;
  echo   quantity_received: ColumnType^<number ^| null, number ^| undefined, number ^| undefined^>;
  echo   unit_cost: number;
  echo   subtotal: number ^| null;
  echo }
) > "%PURCHASE_ORDER_ITEMS_FILE_PATH%"


REM --- Feature: Sales (SalesTable, SaleItemsTable, SaleItemTaxesTable) ---
echo Creando tipos para Sales...
set FEATURE_NAME=sales
if not exist "%BASE_DIR%\features\%FEATURE_NAME%" mkdir "%BASE_DIR%\features\%FEATURE_NAME%"
set SALES_FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\sales.types.ts
set SALE_ITEMS_FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\sale-items.types.ts
set SALE_ITEM_TAXES_FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\sale-item-taxes.types.ts

(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface SalesTable {
  echo   id: Generated^<number^>;
  echo   business_id: number;
  echo   location_id: number;
  echo   user_id: number;
  echo   customer_id: number ^| null;
  echo   sale_date: ColumnType^<Date, Date ^| undefined, Date^>;
  echo   subtotal_amount: number;
  echo   discount_amount: ColumnType^<number ^| null, number ^| undefined, number ^| undefined^>;
  echo   tax_amount: number;
  echo   total_amount: number;
  echo   status: string;
  echo   notes: string ^| null;
  echo   created_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo   updated_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo }
) > "%SALES_FILE_PATH%"

(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface SaleItemsTable {
  echo   id: Generated^<number^>;
  echo   sale_id: number;
  echo   product_id: number;
  echo   quantity: number;
  echo   unit_price_at_sale: number;
  echo   discount_percentage_item: ColumnType^<number ^| null, number ^| undefined, number ^| undefined^>;
  echo   discount_amount_item: ColumnType^<number ^| null, number ^| undefined, number ^| undefined^>;
  echo   tax_amount_item: number;
  echo   subtotal_item: number;
  echo   notes: string ^| null;
  echo }
) > "%SALE_ITEMS_FILE_PATH%"

(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface SaleItemTaxesTable {
  echo   id: Generated^<number^>;
  echo   sale_item_id: number;
  echo   tax_rate_id: number;
  echo   tax_name_at_sale: string;
  echo   tax_rate_at_sale: number;
  echo   taxable_base_amount: number;
  echo   calculated_tax_amount: number;
  echo }
) > "%SALE_ITEM_TAXES_FILE_PATH%"


REM --- Feature: Subscriptions ---
echo Creando tipos para Subscriptions...
set FEATURE_NAME=subscriptions
if not exist "%BASE_DIR%\features\%FEATURE_NAME%" mkdir "%BASE_DIR%\features\%FEATURE_NAME%"
set FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\%FEATURE_NAME%.types.ts
(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface SubscriptionPlansTable {
  echo   id: Generated^<number^>;
  echo   name: string;
  echo   price_monthly: number;
  echo   price_annually: number ^| null;
  echo   max_users: number ^| null;
  echo   max_locations: number ^| null;
  echo   max_products: number ^| null;
  echo   max_invoices_monthly: number ^| null;
  echo   features: string ^| null;
  echo   is_active: ColumnType^<boolean ^| null, boolean ^| undefined, boolean ^| undefined^>;
  echo   created_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo   updated_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo }
) > "%FILE_PATH%"

REM --- Feature: Suppliers ---
echo Creando tipos para Suppliers...
set FEATURE_NAME=suppliers
if not exist "%BASE_DIR%\features\%FEATURE_NAME%" mkdir "%BASE_DIR%\features\%FEATURE_NAME%"
set FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\%FEATURE_NAME%.types.ts
(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface SuppliersTable {
  echo   id: Generated^<number^>;
  echo   business_id: number;
  echo   name: string;
  echo   nit: string ^| null;
  echo   contact_person: string ^| null;
  echo   email: string ^| null;
  echo   phone: string ^| null;
  echo   address: string ^| null;
  echo   created_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo   updated_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo }
) > "%FILE_PATH%"

REM --- Feature: Taxes (TaxesTable, TaxRatesTable) ---
echo Creando tipos para Taxes...
set FEATURE_NAME=taxes
if not exist "%BASE_DIR%\features\%FEATURE_NAME%" mkdir "%BASE_DIR%\features\%FEATURE_NAME%"
set TAXES_FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\taxes.types.ts
set TAX_RATES_FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\tax-rates.types.ts

(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface TaxesTable {
  echo   id: Generated^<number^>;
  echo   business_id: number ^| null;
  echo   name: string;
  echo   code: string ^| null;
  echo   is_percentage: ColumnType^<boolean ^| null, boolean ^| undefined, boolean ^| undefined^>;
  echo   created_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo   updated_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo }
) > "%TAXES_FILE_PATH%"

(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface TaxRatesTable {
  echo   id: Generated^<number^>;
  echo   tax_id: number;
  echo   business_id: number ^| null;
  echo   rate: number;
  echo   description: string ^| null;
  echo   is_active: ColumnType^<boolean ^| null, boolean ^| undefined, boolean ^| undefined^>;
  echo   start_date: Date ^| null;
  echo   end_date: Date ^| null;
  echo   created_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo   updated_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo }
) > "%TAX_RATES_FILE_PATH%"

REM --- Feature: Users ---
echo Creando tipos para Users...
set FEATURE_NAME=users
if not exist "%BASE_DIR%\features\%FEATURE_NAME%" mkdir "%BASE_DIR%\features\%FEATURE_NAME%"
set FILE_PATH=%BASE_DIR%\features\%FEATURE_NAME%\%FEATURE_NAME%.types.ts
(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo export interface UsersTable {
  echo   id: Generated^<number^>;
  echo   business_id: number;
  echo   role_id: number ^| null;
  echo   first_name: string;
  echo   last_name: string;
  echo   email: string;
  echo   password_hash: string;
  echo   phone: string ^| null;
  echo   is_active: ColumnType^<boolean ^| null, boolean ^| undefined, boolean ^| undefined^>;
  echo   last_login_at: Date ^| null;
  echo   created_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo   updated_at: ColumnType^<Date ^| null, Date ^| undefined, Date ^| undefined^>;
  echo }
) > "%FILE_PATH%"


REM --- Creación de src/db/meta.types.ts ---
echo Creando src/db/meta.types.ts...
set META_TYPES_FILE_PATH=%BASE_DIR%\db\meta.types.ts
(
  echo %KSQLY_IMPORT_LINE%
  echo.
  echo type VectorEmbedding = unknown;
  echo.
  echo export interface MetaEmbeddingsTable {
  echo   id: Generated^<number^>;
  echo   created_at: Generated^<Date^>;
  echo   content: string;
  echo   embedding: VectorEmbedding;
  echo }
  echo.
  echo export interface MetaMigrationsTable {
  echo   version: string;
  echo   name: string ^| null;
  echo   applied_at: Generated^<Date^>;
  echo }
) > "%META_TYPES_FILE_PATH%"


REM --- Creación de src/db/database.interface.ts ---
echo Creando src/db/database.interface.ts...
set DB_INTERFACE_FILE_PATH=%BASE_DIR%\db\database.interface.ts
(
  echo import type { BusinessesTable } from '../features/businesses/businesses.types';
  echo import type { CashRegisterSessionsTable } from '../features/cash-registers/cash-registers.types';
  echo import type { CategoriesTable } from '../features/categories/categories.types';
  echo import type { CustomersTable } from '../features/customers/customers.types';
  echo import type { InventoryTable } from '../features/inventory/inventory.types';
  echo import type { InvoicesTable } from '../features/invoices/invoices.types';
  echo import type { LocationsTable } from '../features/locations/locations.types';
  echo import type { PaymentMethodsTable } from '../features/payment-methods/payment-methods.types';
  echo import type { PaymentsTable } from '../features/payments/payments.types';
  echo import type { PermissionsTable } from '../features/auth/permissions.types';
  echo import type { ProductTaxesTable } from '../features/products/product-taxes.types';
  echo import type { ProductsTable } from '../features/products/products.types';
  echo import type { PurchaseOrderItemsTable } from '../features/purchases/purchase-order-items.types';
  echo import type { PurchaseOrdersTable } from '../features/purchases/purchase-orders.types';
  echo import type { RolePermissionsTable } from '../features/auth/role-permissions.types';
  echo import type { RolesTable } from '../features/auth/roles.types';
  echo import type { SaleItemTaxesTable } from '../features/sales/sale-item-taxes.types';
  echo import type { SaleItemsTable } from '../features/sales/sale-items.types';
  echo import type { SalesTable } from '../features/sales/sales.types';
  echo import type { SubscriptionPlansTable } from '../features/subscriptions/subscriptions.types';
  echo import type { SuppliersTable } from '../features/suppliers/suppliers.types';
  echo import type { TaxRatesTable } from '../features/taxes/tax-rates.types';
  echo import type { TaxesTable } from '../features/taxes/taxes.types';
  echo import type { UsersTable } from '../features/users/users.types';
  echo import type { MetaEmbeddingsTable, MetaMigrationsTable } from './meta.types';
  echo.
  echo export interface Database {
  echo   // Schema: meta
  echo   'meta.embeddings': MetaEmbeddingsTable;
  echo   'meta.migrations': MetaMigrationsTable;
  echo.
  echo   // Schema: public
  echo   businesses: BusinessesTable;
  echo   cash_register_sessions: CashRegisterSessionsTable;
  echo   categories: CategoriesTable;
  echo   customers: CustomersTable;
  echo   inventory: InventoryTable;
  echo   invoices: InvoicesTable;
  echo   locations: LocationsTable;
  echo   payment_methods: PaymentMethodsTable;
  echo   payments: PaymentsTable;
  echo   permissions: PermissionsTable;
  echo   product_taxes: ProductTaxesTable;
  echo   products: ProductsTable;
  echo   purchase_order_items: PurchaseOrderItemsTable;
  echo   purchase_orders: PurchaseOrdersTable;
  echo   role_permissions: RolePermissionsTable;
  echo   roles: RolesTable;
  echo   sale_item_taxes: SaleItemTaxesTable;
  echo   sale_items: SaleItemsTable;
  echo   sales: SalesTable;
  echo   subscription_plans: SubscriptionPlansTable;
  echo   suppliers: SuppliersTable;
  echo   tax_rates: TaxRatesTable;
  echo   taxes: TaxesTable;
  echo   users: UsersTable;
  echo }
) > "%DB_INTERFACE_FILE_PATH%"

echo.
echo Proceso completado. Revisa los archivos creados en la carpeta %BASE_DIR%.
echo Puede que necesites ajustar los escapes de caracteres si algo no se genero correctamente.

endlocal
