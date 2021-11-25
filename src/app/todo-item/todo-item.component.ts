import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../services/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo | any
  @Output() checkboxClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onCheckboxClicked() {
    console.log('checkbox was clicked') /* TODO - add function */
    this.checkboxClicked.emit();
  }

  onEditClicked() {
    this.editClicked.emit();
  }

}
