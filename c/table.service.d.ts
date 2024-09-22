import { TableSort } from './table-sort.interface';
export interface TableService<T = any> {
    get: (sort?: TableSort, pageSize?: number) => Promise<{
        hasMore: boolean;
        rows: T[];
    }>;
    loadMore: (sort?: TableSort, pageSize?: number) => Promise<{
        hasMore: boolean;
        rows: T[];
    }>;
    arrangeColumns?: (id: string, headers: string[]) => Promise<void>;
    getColumnOrder?: (id: string) => Promise<string[]>;
    adjustPageSize?: (pageSize: number) => Promise<void>;
    adjustSort?: (sort: TableSort) => Promise<void>;
    export?: () => Promise<T[]>;
    import?: (file: File) => Promise<T[]>;
}
