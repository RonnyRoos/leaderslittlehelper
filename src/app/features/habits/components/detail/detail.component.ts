import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Habit } from "../../habit";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent  {
  @Input() habit: Habit;
  @Output() updateHabit = new EventEmitter<void>();
  @Output() deleteHabit = new EventEmitter<void>();

  constructor() {}

  update() {
    this.updateHabit.emit();
  }

  delete() {
    this.deleteHabit.emit();
  }
}
