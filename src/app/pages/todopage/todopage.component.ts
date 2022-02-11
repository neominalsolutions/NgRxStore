import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/state/todos/todo';
import { TodoState } from 'src/app/state/todos/todo.state';

@Component({
  templateUrl: './todopage.component.html',
  styleUrls: ['./todopage.component.css'],
})
export class TodoPageComponent implements OnInit {
  todoReducer$: Observable<TodoState>;

  constructor(private store: Store<{ todoReducer: TodoState }>) {
    this.todoReducer$ = store.select('todoReducer');
  }

  editMode: boolean = false;

  ngOnInit(): void {
    console.log('todoPagengOnInit');

    this.todoReducer$.subscribe((state) => {
      console.log('state', state);

      this.editMode = state.selectedTodo == undefined ? false : true;

      console.log('editMode', this.editMode);
    });
  }
}
