import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from './state/todos/todo';
import { TodoState } from './state/todos/todo.state';
import { load } from './state/todos/todos.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularStore';

  constructor(private store: Store<{ todoReducer: TodoState }>) {
    const data: Todo[] = [
      {
        id: Math.random() * 100000,
        title: 'Title1',
        completed: false,
      },
      {
        id: Math.random() * 100000,
        title: 'Title2',
        completed: false,
      },
      {
        id: Math.random() * 100000,
        title: 'Title3',
        completed: false,
      },
    ];

    this.store.dispatch(load({ todos: data }));
  }
}
