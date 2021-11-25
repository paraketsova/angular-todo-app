import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    new Todo('This is a test!'),
    new Todo('This test #2'),
  ] 

  constructor() { }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(ind: number, updatedTodo: Todo) {
    this.todos[ind] = updatedTodo; 
  }

  deleteTodo(ind: number) {
    this.todos.splice(ind, 1); 
  }
}
