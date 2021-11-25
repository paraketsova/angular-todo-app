import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../services/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo | any

  constructor() { }

  ngOnInit(): void {
  }

}
