import { Injectable } from '@angular/core'; // inject into component
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todoLimit:string ='?_limit=10';

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {     //returns an observable

    return this.http.get<Todo[]>(`${this.todosUrl}${this.todoLimit}`);
  }
}
