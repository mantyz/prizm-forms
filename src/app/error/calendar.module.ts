import { NgModule } from '@angular/core';

import { CalendarComponent } from './calendar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  PrizmInputLayoutMonthRangeModule,
  PrizmInputMultiSelectModule,
} from '@prizm-ui/components';

@NgModule({
  imports: [
    ReactiveFormsModule,
    PrizmInputLayoutMonthRangeModule,
    PrizmInputMultiSelectModule,
  ],
  exports: [CalendarComponent],
  declarations: [CalendarComponent],
  providers: [],
})
export class CalendarModule {}
