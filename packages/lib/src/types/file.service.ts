export default interface FileService {
  acceptedFiles: string;
  uploadFile: (file: any, id?: string) => Promise<string>;
}
