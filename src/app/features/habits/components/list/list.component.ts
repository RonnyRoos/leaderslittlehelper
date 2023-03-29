import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Observable } from 'rxjs';
import { Habit } from "../../habit";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  {
  @Input() habits$: Observable<Habit[]>;
  @Output() habitEmitter = new EventEmitter<Habit>();

  constructor() {}

  selectHabit(habit: Habit) {
    this.habitEmitter.emit(habit);
  }
}
