import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc, docData,
  Firestore, updateDoc
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Habit } from "../habit/habit";

@Injectable({
  providedIn: 'root'
})
export class HabitsFirestoreService {
  firestore: Firestore = inject(Firestore)
  habits$: Observable<any[]>;
  habitsCollection: CollectionReference;

  constructor() {
    this.habitsCollection = collection(this.firestore, 'habits');
    this.habits$ = collectionData(this.habitsCollection, {idField: 'id'}) as Observable<Habit[]>;
  }

  get(id: String) {
    const habitDocReference = doc(this.firestore, `habits/${id}`);
    return docData(habitDocReference, {idField: 'id'});
  }

  getAll() {
    return collectionData(this.habitsCollection, {
      idField: 'id',
    }) as Observable<Habit[]>;
  }

  add(habit: Habit) {
    return addDoc(this.habitsCollection, habit);
  }

  update(habit: Habit) {
    const habitDocReference = doc(
      this.firestore,
      `habits/${habit.id}`
    );
    return updateDoc(habitDocReference, {...habit});
  }

  delete(habit: Habit) {
    return deleteDoc(doc(this.habitsCollection, habit.id)).then(r => alert('derp'));
  }
}
