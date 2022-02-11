import { createReducer, on } from '@ngrx/store';
import { TodoState } from './todo.state';
import { Todo } from './todo';

import { load, add, remove, edit, select, update } from './todos.action';

export const initialState: TodoState = {
  todos: [],
  filteredTodos: [],
  selectedTodo: undefined,
};

// reducer oluşturmak için createReducer function kullanırız.
// on ile action dinleriz
// reducer initialState ile başlar
const _todoReducer = createReducer(
  initialState,
  on(load, (state, { todos }) => ({
    ...state,
    todos: todos,
  })),
  on(add, (state, { todo }) => ({
    ...state,
    todos: [todo, ...state.todos],
  })),
  on(remove, (state, { todoId }) => ({
    ...state,
    todos: [...state.todos.filter((x) => x.id != todoId)],
  })),
  on(edit, (state, { todoId }) => ({
    ...state,
    selectedTodo: { ...state.todos.find((x) => x.id == todoId) } as Todo,
  })),
  on(select, (state, { todoId }) => ({
    ...state,
    selectedTodo:
      todoId == -1
        ? undefined
        : ({ ...state.todos.find((x) => x.id == todoId) } as Todo),
  })),
  on(update, (state, { todo }) => {
    let updatedTodos = state.todos.map((item) =>
      item.id == todo.id ? (item = { ...todo }) : item
    );

    return {
      ...state,
      todos: [...updatedTodos],
    };
  })
);

export function TodoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
