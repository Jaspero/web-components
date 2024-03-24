import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { ENV_CONFIG } from './env-config';
import { getStorage } from 'firebase/storage';

export const firebaseApp = initializeApp(ENV_CONFIG);

export const db = getFirestore(firebaseApp);
export const storage = getStorage();
