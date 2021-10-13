import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Array<Itodo> = [];
  
  constructor(private servicTodo:TodoService) { }
  
  ngOnInit(): void {
  }
  
  public onTodoClick(todo: Itodo, index: number): void{
    this.servicTodo.setSeledtedTodo(todo);
    this.todos.forEach(i => {
      if (i.selected) {
        i.selected = false}
    });
    this.todos[index].selected = true;
    }
  }