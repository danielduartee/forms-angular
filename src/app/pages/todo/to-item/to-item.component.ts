import { Todo } from 'src/app/models/todo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-to-item',
  templateUrl: './to-item.component.html',
  styleUrls: ['./to-item.component.css']
})
export class ToItemComponent implements OnInit {
  @Input() todo: Todo = {
    id: 0,
    title: '',
    done: false,
  };
  @Output() remove = new EventEmitter;
  done = false;
 

  constructor() { }

  ngOnInit(): void {
  }

  removeTodo() {
    this.remove.emit(this.todo);

  }
  markAsDone(){
    this.done = true;
  }
}
