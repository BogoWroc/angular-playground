import {EventEmitter} from '@angular/core';

export class KeypadService {

  private buffer = '';
  dataEvent = new EventEmitter<string>();

  onKeyPress(key: string) {
    console.log(key);
    switch (key) {
      case '=':
        // tslint:disable-next-line:no-eval
        this.buffer = eval(this.buffer);
        break;
      case 'C':
        this.buffer = '';
        break;
      default:
        this.buffer += key;
    }

    this.dataEvent.emit(this.buffer);

    // if (key === '=') {
    //   // tslint:disable-next-line:no-eval
    //   this.buffer = eval(this.buffer);
    // } else {
    //   this.buffer += key;
    // }
    // this.dataEvent.emit(this.buffer);
  }
}
