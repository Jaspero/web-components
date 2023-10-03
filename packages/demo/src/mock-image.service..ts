import type ImageService from '../../../dist/types/image.service';

export class MockImageService implements ImageService {
  acceptedFiles = 'image/png, image/jpeg';
  uploadFile = async (file) => {
    return 'http://filesavedhere.com';
  };
}
