import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { EventTypes } from '../shared/enums/event-types';
import { Todo } from '../shared/interfaces/todo';
import { ToastService } from '../shared/services/toast.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit, OnDestroy {

  /** Subscription for observables to unsubscribe after component destroy. */
  private readonly subscription = new Subscription();

  /** List of todos. */
  todos: Todo[] = [];

  constructor(
    private appService: AppService, 
    private toastService: ToastService) {
    console.debug('TodosComponent initiated.');
  }

  ngOnInit(): void {
    this.subscription.add(this.appService.todos.subscribe({
      next: (value: Todo[]): void => {
        this.todos = value;
      },
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleTodo(todo: Todo): void {
    todo.done = !todo.done;
    this.appService.todos.next(this.todos);
  }

  clean(): void {
    this.appService.todos.next(this.todos.filter((todo: Todo): boolean => !todo.done));
    this.toastService.showToast(EventTypes.Success, 'Completed tasks was removed')
  }
}
