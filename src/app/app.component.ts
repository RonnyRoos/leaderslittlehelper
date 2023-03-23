import { Component, inject } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { HabitDialogComponent, HabitDialogResult } from "./habit-dialog/habit-dialog.component";
import { Habit } from "./habit/habit";
import { Observable } from "rxjs";
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference, deleteDoc, doc,
  DocumentReference,
  Firestore,
} from "@angular/fire/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  store = inject(Firestore);

  /*[
  {
    title: "Do the good stuff",
    description: "This is where you are supposed to create value for yourself",
    repeatEntity: "Daily",
    repeatFrequency: 1
  },
  {
    title: "Testing derps",
    description: "Obvious...",
    repeatEntity: "Daily",
    repeatFrequency: 1
  }
];*/
  title: any;
  firestore: Firestore = inject(Firestore)
  habits$: Observable<any[]>;
  habitsCollection: CollectionReference;


  constructor(private dialog: MatDialog) {
    this.habitsCollection = collection(this.firestore, 'habits');
    this.habits$ = collectionData(this.habitsCollection);
  }

  newHabit(): void {
    const dialogRef = this.dialog.open(HabitDialogComponent, {
      width: '270px',
      data: {
        habit: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: HabitDialogResult | undefined) => {
        if (!result) {
          return;
        }

        addDoc(this.habitsCollection, result.habit).then((documentReference: DocumentReference) => {
          // the documentReference provides access to the newly created document
        });

      });
  }

  editHabit(habit: Habit): void {
    const dialogRef = this.dialog.open(HabitDialogComponent, {
      width: '270px',
      data: {
        habit,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: HabitDialogResult | undefined) => {
      if (!result) {
        return;
      }
      /*if (result.delete) {
        deleteDoc(doc(this.firestore, ))

        habitsCollection.doc(habit.id).delete();
      } else {
        habitsCollection.doc(habit.id).update(habit);
      }*/
    });
  }
}
