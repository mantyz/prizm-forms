import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl } from '@angular/forms';
import { PrizmMonth, PrizmMonthRange } from '@prizm-ui/components';

@Component({
  selector: 'calendar-form',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  form = new FormGroup({
    period: new FormControl(
      new PrizmMonthRange(new PrizmMonth(2022, 1), new PrizmMonth(2022, 3))
    ),
  });

  value = true;
  readonly valueControl = new UntypedFormControl([]);
  readonly items = [
    'One',
    'Two',
    'Three',
    'Very long text with a lot of characters and spaces and other stuff and things',
  ];
  readonly valueDisabled = new UntypedFormControl(false);

  constructor() {}

  ngOnInit() {
    this.valueDisabled.disable();
  }

  public setDefaultValue(): void {
    this.valueControl.setValue([this.items[0]], { emitEvent: false });
  }
}
