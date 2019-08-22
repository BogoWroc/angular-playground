import {Component, Input, OnInit} from '@angular/core';
import {KeypadService} from '../keypad/keypad.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() value = '0';

  constructor(private calcService: KeypadService) {
  }

  ngOnInit() {
    this.calcService.dataEvent.subscribe((data: string) => {
      if (data === '') {
        this.value = '0';
      } else {
        this.value = data;
      }
    });
  }

}
