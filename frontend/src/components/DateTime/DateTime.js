import './DateTime.css';
import React from 'react'
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';

export default function DateTime () {
        // const dateValue: Date = new Date("02/05/2021 10:30 AM");
        // const minDate: Date = new Date("02/05/2021 09:00 AM");
        // const maxDate: Date = new Date("02/06/2021 06:00 PM");
  return (
    <>
    <div>
      <DateTimePickerComponent placeholder="Choose a date and time"
    //   value={dateValue}
    //   min={minDate}
    //   max={maxDate}
      format="dd-MMM-yy HH:mm"
      step={60}></DateTimePickerComponent>
    </div>
    </>
  )
}
