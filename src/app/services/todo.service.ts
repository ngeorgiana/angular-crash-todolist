import { Injectable } from '@angular/core'; // inject into component
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todoLimit:string ='?_limit=10';

  constructor(private http:HttpClient) { }

  //GET Todos
  getTodos():Observable<Todo[]> {     //returns an observable

    return this.http.get<Todo[]>(`${this.todosUrl}${this.todoLimit}`);
  }

  //Toggle Completed
  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions) ;
  }

  //Delete Todo
  deleteTodo(todo: Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }
}
