import type AssetManagerService from '../../../dist/types/asset-manager.service';
import {
  ref,
  listAll,
  getMetadata,
  getDownloadURL,
  type StorageReference,
  deleteObject,
  uploadBytesResumable
} from 'firebase/storage';
import { storage } from './firebase';
import type { Asset, Folder } from '../../../dist/types/asset-manager.service';
import { writable } from 'svelte/store';

export class AMService implements AssetManagerService {
  async getDownloadUrl(r: StorageReference) {
    const url = await getDownloadURL(r);
    return url.split('?')[0] + `?alt=media`;
  }

  async fetch(path: string) {
    const data = await listAll(ref(storage, path));

    const images = await Promise.all(
      data.items.map((item) => {
        const r = ref(storage, item.fullPath);

        return Promise.all([getMetadata(r), this.getDownloadUrl(r)]);
      })
    );

    return [
      ...(data.prefixes
        .map((prefix) => ({
          name: prefix.name,
          id: `${path}/${prefix.name}`,
          type: 'folder'
        }))
        .sort((a, b) => a.name.localeCompare(b.name)) as Folder[]),
      ...(images
        .map((image) => ({
          id: image[0].fullPath,
          name: image[0].name,
          url: image[1],
          contentType: image[0].contentType,
          type: 'asset',
          size: image[0].size
        }))
        .sort((a, b) => a.name.localeCompare(b.name)) as Asset[])
    ];
  }

  async upload(p: string, file: File) {
    const path = `${p}/${file.name}`;
    const r = ref(storage, path);

    const uploader = uploadBytesResumable(r, file);

    console.log(file);

    let currentProgress = 0;
    let curentStatus = 'uploading';

    const item = {
      id: path,
      name: file.name,
      size: file.size,
      path,
      status: writable(curentStatus),
      progress: writable(currentProgress),
      uploader,
      contentType: file.type,
      type: 'file',
      url: ''
    };

    if (item.contentType.split('/')[0] === 'image') {
      item.url = URL.createObjectURL(file);
    }

    uploader.on(
      'state_changed',
      (snapshot) => {
       /* const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        if (progress !== currentProgress) {
          currentProgress = progress;
          item.progress.set(progress);
        }

        switch (snapshot.state) {
          case 'paused':
          case 'running':
            if (curentStatus !== snapshot.state) {
              item.status.set(snapshot.state);
              curentStatus = snapshot.state;
            }
            break;
        }*/
      },
      (error) => {
        // TODO: Error handling
        console.error(`Uploading file ${item.id}`, error);
      },
      async () => {
        item.url = await this.getDownloadUrl(uploader.snapshot.ref);
      }
    );

    return item;
  }

  async remove(id: string) {
    const r = ref(storage, id);
    await deleteObject(r);
  }
}
