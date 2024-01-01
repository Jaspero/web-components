import type { TableHeader } from './table-header.interface';
import type { TableSort } from './table-sort.interface';

export interface TableService<T = any> {
  get: (sort?: TableSort) => Promise<{ hasMore: boolean; rows: T[] }>;
  loadMore: (sort?: TableSort) => Promise<{ hasMore: boolean; rows: T[] }>;
  arrangeColumns?: (headers: TableHeader[]) => TableHeader[];
  export?: () => Promise<T[]>;
}
