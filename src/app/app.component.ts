import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { HabitDialogComponent, HabitDialogResult } from "./habit-dialog/habit-dialog.component";
import { Habit } from "./habit/habit";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  habits: Habit[] = [
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
  ];
  title: any;

  constructor(private dialog: MatDialog) {
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
        this.habits.push(result.habit);
      });
  }
}
