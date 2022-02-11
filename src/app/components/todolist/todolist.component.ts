import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoState } from 'src/app/state/todos/todo.state';
import { Store } from '@ngrx/store';
import { edit, remove } from 'src/app/state/todos/todos.action';
import { Todo } from 'src/app/state/todos/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  todoReducer$: Observable<TodoState>;
  // store üzerinden hangi reducer'ı dinleyeceğimizi hangi state takip edeceğimizi tanıtırız.

  constructor(private store: Store<{ todoReducer: TodoState }>) {
    // private store: Store<{ todoReducer: TodoState }> constrcutor da store servisine bağlanırız. ve select operatörü ile todoReducer dinleyeceğimizi subscribe olucağımızı söyleriz.
    this.todoReducer$ = store.select('todoReducer');
  }

  todos: Todo[] = [];

  ngOnInit(): void {
    this.todoReducer$.subscribe((res) => {
      this.todos = [...res.todos];
    });
  }

  delete(id: number) {
    // store üzerinden dispatch ile bir eylemde bulun diyoruz.
    // store üzerinden silme action'ı çağır
    // payload actiondan taşınacak aktarılacak değer { todoId: id }
    this.store.dispatch(remove({ todoId: id }));
  }
  edit(id: number) {
    this.store.dispatch(edit({ todoId: id }));
  }
}
