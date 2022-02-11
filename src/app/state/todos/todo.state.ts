import { Todo } from './todo';

// kendimeze componentler arasında taşıyacağımız veriler için bir state açıyoruz.
export interface TodoState {
  todos: Todo[];
  filteredTodos: Todo[];
  selectedTodo?: Todo;
}
