import { inject, Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class DemoService {
  private readonly _firestore = inject(Firestore);
  private readonly _quizCollection = collection(this._firestore, 'demo');

  public async create(title: string): Promise<string> {
    const newDoc = { title };
    const docReference = await addDoc(this._quizCollection, newDoc);
    return docReference.id;
  }
}
