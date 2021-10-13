import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Itodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService{

  private todos: Array<Itodo> = [];
  
  private _subject: BehaviorSubject<Array<Itodo>> = new BehaviorSubject(this.todos);
  private _singleTodoSubject: BehaviorSubject<Itodo> = new BehaviorSubject(
    this.todos.length ? this.todos[0] : null);
  constructor() { }
  public getTodo(): Observable<Array<Itodo>> {
    if (!this._subject.value.length) {
      const _subjectString = localStorage.getItem("todos");
      if (_subjectString) {
        const exitsTodos = JSON.parse(_subjectString);
        this._subject.next(exitsTodos);
      }
    }
    return this._subject.asObservable();
  }
  public getSinglTodo(): Observable<Itodo>{
    return this._singleTodoSubject.asObservable();
  }
  public setSeledtedTodo(todo: Itodo): void{
    this._singleTodoSubject.next(todo);
  }
  public addNewItodo(todo: Itodo):void{
    const exitsTodo:Array<Itodo> = this._subject.value;
    exitsTodo.push(todo);
    this._subject.next(exitsTodo);
    localStorage.setItem("todos", JSON.stringify(exitsTodo));
  }
  public onaction(todoId: string, action:string): void{
   const exitsTodo:Array<Itodo> = this._subject.value;
    const todoIndex = exitsTodo.findIndex((singleTodo) => singleTodo.id == todoId);
    console.log(todoIndex,'pini');
    exitsTodo[todoIndex][action] = true;
    this._subject.next(exitsTodo);
    localStorage.setItem("todos", JSON.stringify(exitsTodo));
  }
}
