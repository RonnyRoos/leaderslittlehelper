import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Habit } from "../../habit";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    public readonly dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly habit: Habit
  ) {}

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.form = this.formBuilder.group({
      title: [this.habit.title, [Validators.required]],
      description: [this.habit.description, [Validators.required]],
      repeatFrequency: [this.habit.repeatFrequency, [Validators.required]],
      repeatEntity: [this.habit.repeatEntity, [Validators.required]],
    });
  }

  submit() {
    this.dialogRef.close({ ...this.habit, ...this.form.value });
  }
}
