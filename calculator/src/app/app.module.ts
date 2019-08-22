import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { DisplayComponent } from './display/display.component';
import { KeypadComponent } from './keypad/keypad.component';
import { UnitComponent } from './unit/unit.component';
import {KeypadService} from './keypad/keypad.service';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DisplayComponent,
    KeypadComponent,
    UnitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [KeypadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
