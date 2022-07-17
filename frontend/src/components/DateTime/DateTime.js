import "./DateTime.css";
import React from "react";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

export default function DateTime({ name, setMetaData }) {
  return (
    <>
      <div>
        <DateTimePickerComponent
          placeholder="Choose a date and time"
          //   value={dateValue}
          min={new Date()}
          //   max={maxDate}
          format="dd-MMM-yy HH:mm"
          step={60}
          onChange={(e) => {
            let date = new Date(e.target.changedArgs.value);
            setMetaData((prev) => {
              return {
                ...prev,
                [name]: date.getTime(),
              };
            });
            console.log(e.target.changedArgs.value);
          }}
        ></DateTimePickerComponent>
      </div>
    </>
  );
}
