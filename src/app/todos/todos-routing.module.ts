import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodosComponent } from './todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
  {
    path: 'new',
    component: AddTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {
}
