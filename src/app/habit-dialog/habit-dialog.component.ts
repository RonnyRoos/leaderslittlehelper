import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Habit } from "../habit/habit";

@Component({
  selector: 'app-habit-dialog',
  templateUrl: './habit-dialog.component.html',
  styleUrls: ['./habit-dialog.component.css']
})
export class HabitDialogComponent {
  private backupHabit: Partial<Habit> = { ...this.data.habit };

  constructor(
    public dialogRef: MatDialogRef<HabitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HabitDialogData
  ) {}

  cancel(): void {
    this.data.habit.title = this.backupHabit.title;
    this.data.habit.description = this.backupHabit.description;
    this.data.habit.repeatEntity = this.backupHabit.repeatEntity;
    this.data.habit.repeatFrequency = this.backupHabit.repeatFrequency;
    this.data.habit.description = this.backupHabit.description;
    this.dialogRef.close(this.data);
  }

}

export interface HabitDialogData {
  habit: Partial<Habit>;
  enableDelete: boolean;
}

export interface HabitDialogResult {
  habit: Habit;
  delete?: boolean;
}
