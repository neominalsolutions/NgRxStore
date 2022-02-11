import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/state/todos/todo';
import { TodoState } from 'src/app/state/todos/todo.state';
import { update, select } from 'src/app/state/todos/todos.action';

@Component({
  selector: 'app-todo-update-form',
  templateUrl: './todo-update-form.component.html',
  styleUrls: ['./todo-update-form.component.css'],
})
export class TodoUpdateFormComponent implements OnInit {
  todoReducer$: Observable<TodoState>;

  constructor(private store: Store<{ todoReducer: TodoState }>) {
    this.todoReducer$ = store.select('todoReducer');
  }

  todo: Todo = {} as Todo;

  ngOnInit(): void {
    this.todoReducer$.subscribe((state) => {
      this.todo = { ...state.selectedTodo } as Todo;
    });
  }

  @ViewChild('titleInput') titleInput!: ElementRef;
  @ViewChild('completedInput') completedInput!: ElementRef;

  save(event: any) {
    event.preventDefault();

    console.log('titleInput', this.titleInput.nativeElement.value);
    console.log('completedInput', this.completedInput.nativeElement.checked);

    const param: Todo = {
      id: this.todo.id,
      title: this.titleInput.nativeElement.value,
      completed: this.completedInput.nativeElement.checked,
    };

    this.store.dispatch(update({ todo: param }));
    this.store.dispatch(select({ todoId: -1 }));
  }
}
