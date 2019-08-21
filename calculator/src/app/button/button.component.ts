import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() value: string;
  @Output() clickEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onPress(event) {
    this.clickEvent.emit(this.value);
  }

}
