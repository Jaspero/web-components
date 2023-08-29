export default interface ImageService {
  acceptedFiles: string;
  uploadFile: (file: any) => Promise<string>;
}