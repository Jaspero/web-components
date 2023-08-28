export interface ImageService<T = any> {
  acceptedFiles: string;
  imageChange: (e: Event) => Promise<void>;
  uploadFile: () => Promise<void>;
}