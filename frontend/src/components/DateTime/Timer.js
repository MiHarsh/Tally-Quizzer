import "./DateTime.css";
import React from "react";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";

export default function Timer({ name, val, setMetaData }) {
  return (
    <>
      <div>
        <TimePickerComponent
          placeholder="Choose a timer for quiz"
          id="timepicker"
          format="HH:mm"
          step={10}
          minTime={new Date("00:00")}
          maxTime={new Date("03:00")}
          onChange={(e) => {
            let date = new Date(e.target.value);
            // console.log("diff", );
            setMetaData((prev) => {
              return {
                ...prev,
                [name]: date.getTime() - 1669055400000,
              };
            });
          }}
        />
      </div>
    </>
  );
}
