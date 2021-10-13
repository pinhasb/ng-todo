import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Itodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';
import { v4 as uuidv4 } from 'uuid';



@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.component.html',
  styleUrls: ['./newtodo.component.scss']
})
export class NewtodoComponent implements OnInit {
  public minDate: Date = new Date();
  @ViewChild('f') form: NgForm;
  constructor(private todoService:TodoService, private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  public onNewSubmit(): void{
   
    if (this.form.valid) {
      const eddnewtodo: Itodo = {
      id: uuidv4(),
      title: this.form.form.value.title,
      description: this.form.form.value.description,
      isCompleted: false,
      isArchived: false,
      endDate: this.form.form.value.endDate,
      selected: false
    };
    this.todoService.addNewItodo(eddnewtodo);
    this.dialog.closeAll();
}
    }
    
}
