import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TodosModule { }
