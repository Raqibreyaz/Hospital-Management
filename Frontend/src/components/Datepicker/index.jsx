import React from "react";
import DatePicker from "react-datepicker";
import { ErrorMessage } from "../ErrorMessage";
import "react-datepicker/dist/react-datepicker.css";

function Datepicker({
  placeholder = "Select date",
  className,
  value,
  dateFormat = "dd/MM/yyyy",
  onChange,
  errors = [],
  ...restProps
}) {
  const [selectedDate, setSelectedDate] = React.useState(value);

  const onDateChange = (value) => {
    const newValue = value instanceof Date ? value.toISOString() : value;
    setSelectedDate(newValue);
    onChange?.(newValue);
  };

  return (
    <>
      <div className={className}>
        <DatePicker
          dateFormat={dateFormat}
          placeholderText={placeholder}
          selected={selectedDate ? new Date(selectedDate) : null}
          onChange={onDateChange}
          {...restProps}
        />
      </div>
      <ErrorMessage errors={errors} />
    </>
  );
}

function DatePickerRange({
  startDate,
  endDate,
  placeholder = "Select range",
  className,
  dateFormat = "dd/MM/yyyy",
  onChange,
  errors = [],
  ...restProps
}) {
  const [startDateValue, setStartDate] = React.useState(startDate);
  const [endDateValue, setEndDate] = React.useState(endDate);

  const onDateChange = ([start, end]) => {
    const newStartDate = start instanceof Date ? start.toISOString() : start;
    const newEndDate = end instanceof Date ? end.toISOString() : end;
    setStartDate(newStartDate);
    setEndDate(newEndDate);
    onChange?.([newStartDate, newEndDate]);
  };

  return (
    <>
      <div className={className}>
        <DatePicker
          dateFormat={dateFormat}
          placeholderText={placeholder}
          startDate={startDateValue ? new Date(startDateValue) : null}
          endDate={endDateValue ? new Date(endDateValue) : null}
          onChange={onDateChange}
          selectsRange
          {...restProps}
        />
      </div>
      <ErrorMessage errors={errors} />
    </>
  );
}

Datepicker.Range = DatePickerRange;
Datepicker.DateTime = (props) => (
  <Datepicker dateFormat="dd/MM/yyyy h:mm aa" showTimeSelect {...props} />
);
Datepicker.Time = (props) => (
  <Datepicker
    dateFormat="h:mm aa"
    showTimeSelect
    showTimeSelectOnly
    {...props}
  />
);

export { Datepicker };
