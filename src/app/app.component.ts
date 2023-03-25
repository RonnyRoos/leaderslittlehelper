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
  Firestore, updateDoc,
} from "@angular/fire/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: any;
  firestore: Firestore = inject(Firestore)
  habits$: Observable<any[]>;
  habitsCollection: CollectionReference;


  constructor(private dialog: MatDialog) {
    this.habitsCollection = collection(this.firestore, 'habits');
    this.habits$ = collectionData(this.habitsCollection, {idField: 'id'}) as Observable<Habit[]>;
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

        addDoc(this.habitsCollection, result.habit);
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
      if (!result || habit.id === undefined) {
        return;
      }

      if (result.delete) {
        deleteDoc(doc(this.habitsCollection, habit.id)).then(r => alert('derp'));
      }

      // update
      const habitDocReference = doc(
        this.firestore,
        `habits/${habit.id}`
      );
      return updateDoc(habitDocReference, {...habit});
    });
  }
}
