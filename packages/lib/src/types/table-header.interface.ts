import type { TablePipe } from './table-pipe.type';

export interface TableHeader {
  label: string;
  key: string;
  sortable?: boolean;
  sortMethod?: (direction: 'asc' | 'desc', one?: any, two?: any) => 1 | -1 | 0;
  pipes?: TablePipe[];
  fallback?: any;
}
