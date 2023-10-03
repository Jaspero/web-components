export default interface ImageService {
  acceptedFiles: string;
  uploadFile: (file: any, id?: string) => Promise<string>;
}
