export default interface FileService {
    acceptedFiles: string;
    maxSize?: number;
    uploadFile: (file: any, id?: string) => Promise<string>;
}
