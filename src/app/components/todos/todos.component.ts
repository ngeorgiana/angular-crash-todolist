import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];



  constructor(private todoService:TodoService) { } //mostly used to create services

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {  //subscribe to the observable, an asyncronous data stream simmilar to .then
      this.todos = todos;
    }) 
  }

}
