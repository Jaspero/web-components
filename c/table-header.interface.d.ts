import { TablePipe } from './table-pipe.type';
export interface TableHeader {
    label: string;
    key: string;
    sortable?: boolean;
    sortMethod?: (direction: 'asc' | 'desc', one?: any, two?: any) => 1 | -1 | 0;
    pipes?: TablePipe[];
    headerPipes?: Array<(label: string) => string>;
    fallback?: any;
    disableOrganize?: boolean;
    disableToggle?: boolean;
    disabled?: boolean;
    hideOnExport?: boolean;
    /**
     * @description
     * Used when formatting values for export. If nothing is provided we use pipes and fallback.
     */
    exportPipes?: TablePipe[];
    exportFallback?: any;
}
