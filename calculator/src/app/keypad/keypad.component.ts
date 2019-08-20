import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  @Input() action;
  constructor() { }

  ngOnInit() {
  }

  setValue($event: MouseEvent) {

  }
}
