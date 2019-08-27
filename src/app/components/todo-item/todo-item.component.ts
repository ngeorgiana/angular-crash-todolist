import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  //Set dinamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }

    return classes;
  }
  //Set events
  onToggle(todo) {
    todo.completed = !todo.completed;
  }
  onDelete(todo) {
    console.log('delete')
  }

}
