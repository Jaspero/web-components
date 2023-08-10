import type {TablePipe} from './table-pipe.type';

export interface TableHeader {
	label: string;
	key: string;
	sortable?: boolean;
	pipes?: TablePipe[];
	fallback?: any;
}