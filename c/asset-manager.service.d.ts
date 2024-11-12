import { Writable } from 'svelte/store';
export type Item = Asset | Folder;
export interface Folder {
    name: string;
    id: string;
    type: string;
}
export interface Asset {
    id: string;
    name: string;
    url: string;
    contentType: string;
    status?: Writable<'uploading' | 'uploaded' | 'paused' | 'error'>;
    progress?: Writable<number>;
    preventDelete?: boolean;
    uploader?: {
        pause: () => void;
        resume: () => void;
        cancel: () => void;
    };
    type: string;
    size: number;
}
export interface AssetManagerService {
    fetch: (path: string) => Promise<Item[]>;
    upload: (path: string, file: any) => Promise<Asset>;
    remove: (id: string) => Promise<void>;
}
