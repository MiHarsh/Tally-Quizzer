import "./DateTime.css";
import React from "react";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

export default function DateTime({ name, val, setMetaData }) {
  return (
    <>
      <div>
        <DateTimePickerComponent
          placeholder="Choose a date and time"
          value={new Date(val)}
          min={new Date()}
          format="dd-MMM-yy HH:mm"
          step={60}
          onChange={(e) => {
            console.log(e.target.value);
            let date = new Date(e.target.value);
            setMetaData((prev) => {
              return {
                ...prev,
                [name]: date.getTime(),
              };
            });
          }}
        ></DateTimePickerComponent>
      </div>
    </>
  );
}
