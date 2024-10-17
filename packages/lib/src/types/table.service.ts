import type { TableHeader } from './table-header.interface';
import type { TableSort } from './table-sort.interface';

export interface TableService<T = any> {
  get: (sort?: TableSort, pageSize?: number) => Promise<{ hasMore: boolean; rows: T[] }>;
  loadMore: (sort?: TableSort, pageSize?: number) => Promise<{ hasMore: boolean; rows: T[] }>;
  arrangeColumns?: (
    id: string,
    headers: Array<{ key: string; disabled?: boolean }>
  ) => Promise<void>;
  getColumnOrder?: (id: string) => Promise<Array<{ key: string; disabled?: boolean }>>;
  adjustPageSize?: (pageSize: number) => Promise<void>;
  adjustSort?: (sort: TableSort) => Promise<void>;
  export?: () => Promise<T[]>;
  import?: (file: File) => Promise<T[]>;
}
