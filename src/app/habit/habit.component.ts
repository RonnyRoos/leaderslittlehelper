import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Habit } from "./habit";

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css']
})
export class HabitComponent {

  constructor() { }
  @Input() habit: Habit | null = null;
  @Output() edit = new EventEmitter<Habit>();


}
