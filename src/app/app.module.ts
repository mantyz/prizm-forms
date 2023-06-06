import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  PrizmButtonModule,
  PrizmDialogModule,
  PrizmInputLayoutDateRangeModule,
  PrizmInputLayoutMonthRangeModule,
} from '@prizm-ui/components';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './error/calendar.component';
import { CalendarModule } from './error/calendar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    AppRoutingModule,

    PrizmDialogModule,
    PrizmButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
