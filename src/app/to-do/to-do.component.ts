import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {

  buttonStatus : boolean = false;
  name: string = "To do";
  inputText: string = '';
  todo = [{
    "id": 1,
    "name":"alpha",
    "age": 28
  },{
    "id": 2,
    "name":"beta",
    "age": 29
  },{
    "id": 5,
    "name": "gamma",
    "age": 30
  }]

  toDoMap: Map<number, any> = new Map();

  constructor(){
    this.todo.forEach((data) =>{
      this.toDoMap.set(data.id, data);
    })
  }

  buttonClick(){
    this.buttonStatus = !this.buttonStatus;
  }

  removeId(id: number){
   this.toDoMap.delete(id);
  }
}
