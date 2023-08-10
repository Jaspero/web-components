import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

export const firebaseApp = initializeApp();

export const db = getFirestore(firebaseApp);