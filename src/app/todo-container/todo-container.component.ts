import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { NewtodoComponent } from '../components/newtodo/newtodo.component';
import { Itodo } from '../models/todo.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription()
  
   public todo: Itodo;
   public todos: Itodo[];

  constructor(public dialog: MatDialog, private todoservice: TodoService) { }
  
   ngOnInit(): void {
    this.subscription.add(
      this.todoservice.getSinglTodo().subscribe(data =>{
        this.todo = data
      })
    )
     this.subscription.add(
      this.todoservice.getTodo().subscribe(data =>
      { this.todos = data; }
      ))
   }
  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewtodoComponent, {
      width:'250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

 

}
