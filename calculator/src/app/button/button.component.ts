import {Component, Input, OnInit} from '@angular/core';
import {KeypadService} from '../keypad/keypad.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() value: string;

  constructor(private calcService: KeypadService) {
  }

  ngOnInit() {
  }

  onPress(event) {
    this.calcService.onKeyPress(this.value);
  }

}
