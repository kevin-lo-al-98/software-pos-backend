import type { BusinessesTable } from '../features/businesses/businesses.types';
import type { CashRegisterSessionsTable } from '../features/cash-registers/cash-registers.types';
import type { CategoriesTable } from '../features/categories/categories.types';
import type { CustomersTable } from '../features/customers/customers.types';
import type { InventoryTable } from '../features/inventory/inventory.types';
import type { InvoicesTable } from '../features/invoices/invoices.types';
import type { LocationsTable } from '../features/locations/locations.types';
import type { PaymentMethodsTable } from '../features/payment-methods/payment-methods.types';
import type { PaymentsTable } from '../features/payments/payments.types';
import type { PermissionsTable } from '../features/auth/permissions.types';
import type { ProductTaxesTable } from '../features/products/product-taxes.types';
import type { ProductsTable } from '../features/products/products.types';
import type { PurchaseOrderItemsTable } from '../features/purchases/purchase-order-items.types';
import type { PurchaseOrdersTable } from '../features/purchases/purchase-orders.types';
import type { RolePermissionsTable } from '../features/auth/role-permissions.types';
import type { RolesTable } from '../features/auth/roles.types';
import type { SaleItemTaxesTable } from '../features/sales/sale-item-taxes.types';
import type { SaleItemsTable } from '../features/sales/sale-items.types';
import type { SalesTable } from '../features/sales/sales.types';
import type { SubscriptionPlansTable } from '../features/subscriptions/subscriptions.types';
import type { SuppliersTable } from '../features/suppliers/suppliers.types';
import type { TaxRatesTable } from '../features/taxes/tax-rates.types';
import type { TaxesTable } from '../features/taxes/taxes.types';
import type { UsersTable } from '../features/users/users.types';
import type { MetaEmbeddingsTable, MetaMigrationsTable } from './meta.types';

export interface Database {
  // Schema: meta
  'meta.embeddings': MetaEmbeddingsTable;
  'meta.migrations': MetaMigrationsTable;

  // Schema: public
  businesses: BusinessesTable;
  cash_register_sessions: CashRegisterSessionsTable;
  categories: CategoriesTable;
  customers: CustomersTable;
  inventory: InventoryTable;
  invoices: InvoicesTable;
  locations: LocationsTable;
  payment_methods: PaymentMethodsTable;
  payments: PaymentsTable;
  permissions: PermissionsTable;
  product_taxes: ProductTaxesTable;
  products: ProductsTable;
  purchase_order_items: PurchaseOrderItemsTable;
  purchase_orders: PurchaseOrdersTable;
  role_permissions: RolePermissionsTable;
  roles: RolesTable;
  sale_item_taxes: SaleItemTaxesTable;
  sale_items: SaleItemsTable;
  sales: SalesTable;
  subscription_plans: SubscriptionPlansTable;
  suppliers: SuppliersTable;
  tax_rates: TaxRatesTable;
  taxes: TaxesTable;
  users: UsersTable;
}
