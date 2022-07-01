import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'test-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {

  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}
}
