import type { TableHeader } from './table-header.interface';
import type { TableSort } from './table-sort.interface';

export interface TableService<T = any> {
  get: (sort?: TableSort, pageSize?: number) => Promise<{ hasMore: boolean; rows: T[] }>;
  loadMore: (sort?: TableSort, pageSize?: number) => Promise<{ hasMore: boolean; rows: T[] }>;
  arrangeColumns?: (headers: TableHeader[]) => TableHeader[];
  adjustPageSize?: (pageSize: number) => Promise<void>;
  adjustSort?: (sort: TableSort) => Promise<void>;
  export?: () => Promise<T[]>;
}
