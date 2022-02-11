import { createAction, props } from '@ngrx/store';
import { Todo } from './todo';

// props ile actionda hangi tipte veri taşınacağını söylüyoruz. payload'un tipini belirtiyoruz.
// createAction ile ngRx üzerinden dispatch etmek için bir action function tanımlıyoruz.

export const load = createAction('[Todo] load', props<{ todos: Todo[] }>());
export const filter = createAction('[Todo] filter', props<{ todos: Todo[] }>());
export const add = createAction('[Todo] add', props<{ todo: Todo }>());
export const remove = createAction(
  '[Todo] remove',
  props<{ todoId: number }>()
);
export const update = createAction('[Todo] update', props<{ todo: Todo }>());
export const edit = createAction('[Todo] edit', props<{ todoId: number }>());
export const select = createAction(
  '[Todo] select',
  props<{ todoId: number }>()
);
