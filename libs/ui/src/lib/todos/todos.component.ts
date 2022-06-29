import { Component, OnInit } from '@angular/core';
import { Todo } from '@test/type'
@Component({
  selector: 'test-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[] = [];
  constructor() {}

  ngOnInit(): void {}
}
