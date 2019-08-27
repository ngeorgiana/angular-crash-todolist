import { Injectable } from '@angular/core'; // inject into component

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {

    return [
      {
        id: 1,
        title: 'Todo 1',
        completed: true
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: true
      },
      {
        id: 3,
        title: 'Todo Three',
        completed: false
      }
    ]
  }
}
