import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/state/todos/todo';
import { TodoState } from 'src/app/state/todos/todo.state';
import { add } from 'src/app/state/todos/todos.action';

@Component({
  selector: 'app-todo-create-form',
  templateUrl: './todo-create-form.component.html',
  styleUrls: ['./todo-create-form.component.css'],
})
export class TodoCreateFormComponent implements OnInit {
  constructor(private store: Store<{ todoReducer: TodoState }>) {}

  ngOnInit(): void {}

  @ViewChild('titleInput') titleInput!: ElementRef;
  @ViewChild('completedInput') completedInput!: ElementRef;

  save(event: any) {
    event.preventDefault();

    console.log('titleInput', this.titleInput.nativeElement.value);
    console.log('completedInput', this.completedInput.nativeElement.checked);

    const param: Todo = {
      id: Math.random() * 100000,
      title: this.titleInput.nativeElement.value,
      completed: this.completedInput.nativeElement.checked,
    };

    this.store.dispatch(add({ todo: param }));
  }
}
