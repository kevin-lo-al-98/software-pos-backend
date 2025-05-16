import { type Generated, type ColumnType } from 'kysely';

type VectorEmbedding = unknown;

export interface MetaEmbeddingsTable {
  id: Generated<number>;
  created_at: Generated<Date>;
  content: string;
  embedding: VectorEmbedding;
}

export interface MetaMigrationsTable {
  version: string;
  name: string | null;
  applied_at: Generated<Date>;
}
