import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  @Output() dataEvent = new EventEmitter<string>();
  private buffer = '';

  constructor() {
  }

  ngOnInit() {
  }


  onKeyPress(key: string) {
    console.log(key);
    if (key === '=') {
      // tslint:disable-next-line:no-eval
      this.buffer = eval(this.buffer);
    } else {
      this.buffer += key;
    }
    this.dataEvent.emit(this.buffer);

  }
}
