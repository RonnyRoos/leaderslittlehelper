import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HabitsRoutingModule } from "./habits-routing.module";
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { FormComponent } from "./components/form/form.component";
import { HabitsComponent } from "./habits.component";

@NgModule({
  declarations: [HabitsComponent, FormComponent, ListComponent, DetailComponent],
  providers: [],
  imports: [
    CommonModule,
    HabitsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
})
export class HabitsModule { }
