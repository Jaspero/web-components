import { collection, getDocs, query, orderBy, limit, startAfter } from 'firebase/firestore';
import { db } from './firebase';

export class FirebaseTableService {
  collection = 'science-magazine-articles';
  ref = null;
  pageSize = 10;

  async get(sort?: any) {
    const queries: any[] = [collection(db, this.collection)];

    if (sort) {
      queries.push(orderBy(sort.key.replace('/', ''), sort.direction));
    }

    const snap = await getDocs(
      // @ts-ignore
      query(...queries, limit(this.pageSize + 1))
    );

    this.ref = snap.docs[snap.docs.length - 1];

    console.log({
      hasMore: snap.docs.length > this.pageSize,
      rows: snap.docs.slice(0, this.pageSize).map((doc) => ({
        id: doc.id,
        ...(doc.data() as any)
      }))
    });

    return {
      hasMore: snap.docs.length > this.pageSize,
      rows: snap.docs.slice(0, this.pageSize).map((doc) => ({
        id: doc.id,
        ...(doc.data() as any)
      }))
    };
  }

  async loadMore(sort?: any) {
    const queries: any[] = [collection(db, this.collection)];

    if (sort) {
      queries.push(orderBy(sort.key.replace('/', ''), sort.direction));
    }

    if (this.ref) {
      queries.push(startAfter(this.ref));
    }

    const snap = await getDocs(
      // @ts-ignore
      query(...queries, limit(this.pageSize + 1))
    );

    this.ref = snap.docs[snap.docs.length - 1];

    return {
      hasMore: snap.docs.length > this.pageSize,
      rows: snap.docs.slice(0, this.pageSize).map((doc) => ({
        id: doc.id,
        ...(doc.data() as any)
      }))
    };
  }
}
