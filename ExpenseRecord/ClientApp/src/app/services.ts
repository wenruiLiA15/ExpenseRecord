import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { ExpenseRecord } from './models/ExpenseRecord';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private httpUrl = "https://localhost:44425/api/ExpenseRecord";
  public displayList: Array<ExpenseRecord> = new Array<ExpenseRecord>;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ExpenseRecord[]> {
    // const todos: ExpenseRecord[] = this.read();
    // return of(todos);
    return this.httpClient.get<ExpenseRecord[]>(this.httpUrl);
  }



//   createOne(body: ExpenseRecord): Observable<ExpenseRecord> {
//     const todos: ExpenseRecord[] = this.read();
//     const todo: ExpenseRecord = {
//       ...body,
     
//       CreatedTime: new Date().toISOString()
//     };
//     this.post(todo).subscribe();
//     todos.push(todo);
//     // this.write(todo);
//     return of(todo);
//   }

  updateOne(id: string, body: ExpenseRecord): Observable<ExpenseRecord> {
    // const todos: ExpenseRecord[] = this.read();
    // const todo: ExpenseRecord | undefined = todos.find(t => t.id === id);
    // this.httpClient.get<ExpenseRecord>(this.httpUrl + '/' + id).subscribe((todo) => {
    //   if (todo) {
    //     todo.done = body.done;
    //     todo.description = body.description;
    return this.httpClient.put<ExpenseRecord>(this.httpUrl + '/' + id, body);
  }

  deleteOne(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.httpUrl + '/' + id);
    // const todos: ExpenseRecord[] = this.read();
    // const index: number = todos.findIndex(t => t.id === id);
    // todos.splice(index, 1);
    // // this.write(todo);
    // return of(id);
  }

  private read(): ExpenseRecord[] {
    const todosString: string | null = localStorage.getItem('todos');
    try {
      const todos: ExpenseRecord[] = todosString ? JSON.parse(todosString) : [];
      return (Array.isArray(todos) && todos) || [];
    } catch (e) {
      return [];
    }
  }

  private post(item: ExpenseRecord):  Observable<ExpenseRecord> {
    return this.httpClient.post<ExpenseRecord>(this.httpUrl, item);
    // localStorage.setItem('todos', JSON.stringify(items));
  }
}



