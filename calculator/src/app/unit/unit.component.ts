import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  private data = '0';

  constructor() {
  }

  ngOnInit() {
  }

  calculate() {
    return this.data;
  }

  onSelect(data: string) {
    this.data = data;
  }
}
