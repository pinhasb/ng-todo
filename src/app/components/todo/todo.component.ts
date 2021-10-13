import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{

  constructor(private todoservice:TodoService) { }
  @Input() todo: Itodo;
  ngOnInit(): void {
  }
  
  public completed(todo: Itodo): void{
    // todo.isCompleted = true;
     this.todoservice.onaction(todo.id,'isCompleted');
  }
  public isArchived(todo): void{
    // todo.isArchived = true;
    this.todoservice.onaction(todo.id,'isArchived');
  }
}
