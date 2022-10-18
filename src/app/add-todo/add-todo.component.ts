import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { EventTypes } from '../shared/enums/event-types';
import { TodoPriority } from '../shared/enums/todo-priority';
import { Todo } from '../shared/interfaces/todo';
import { ToastService } from '../shared/services/toast.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit, OnDestroy{
  
  public today = new Date();
  public todos: Todo[] = [];
  public subs: Subscription[] = [];
  public todoForm: FormGroup =  new FormGroup({
    title: new FormControl(null, Validators.required),
    priority: new FormControl(TodoPriority.LOW, Validators.required),
    date: new FormControl(null, Validators.required)
  })

  constructor(
    private readonly appService: AppService,
    private readonly toastService: ToastService
    ) {}

  ngOnInit(): void {
    this.subs.push(this.appService.todos.subscribe((todos: Todo[]) => {
      this.todos = todos;
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach((item: Subscription) => item.unsubscribe());
  }

  public onSubmit(): void {
    this.appService.todos.next(this.prepareData());
    this.resetForm();
    this.toastService.showToast(EventTypes.Success, 'А new todo was created');
  }

  public getPriorityList(): string[] {
    return Object.keys(TodoPriority).filter((item: string) => isNaN(Number(item)));
  }

  private resetForm(): void {
    this.todoForm.reset({priority: TodoPriority.LOW});
  }
  
  private prepareData(): Todo[]{
    const {title, priority, date} = this.todoForm.getRawValue();
    const formattedDate = new Date(date).getTime();
    const newTodo = {
        title,
        date: formattedDate,
        priority: Number(priority),
        done: false,
      }
    return [
      newTodo,
      ...this.todos
    ]
  }
}
