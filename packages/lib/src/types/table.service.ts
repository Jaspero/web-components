import type { TableSort } from './table-sort.interface';

export interface TableService<T = any> {
  get: (sort?: TableSort) => Promise<{ hasMore: boolean; rows: T[] }>;
  loadMore: (sort?: TableSort) => Promise<{ hasMore: boolean; rows: T[] }>;
}
