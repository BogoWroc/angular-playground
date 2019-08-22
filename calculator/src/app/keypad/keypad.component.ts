import {Component, OnInit} from '@angular/core';
import {KeypadService} from './keypad.service';


@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {


  constructor(private calcService: KeypadService) {
  }

  ngOnInit() {
  }
}
