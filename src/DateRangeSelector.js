import React, { useState } from "react";
import moment from "moment";
import "moment/min/locales.min";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import { useTranslation } from "react-i18next";

function DateRangeSelector({ start = moment(), end }) {
  const { i18n } = useTranslation();
  const [startDate, setstartDate] = useState(start);
  const [endDate, setendDate] = useState(end || null);
  const [focusedInput, setfocusedInput] = useState(null);

  const handleDateChange = ({ startDate, endDate }) => {
    setstartDate(startDate);
    setendDate(endDate);
  };

  const handleFocusChange = (focusedInput) => setfocusedInput(focusedInput);

  return (
    <DateRangePicker
      endDate={endDate ? endDate.locale(i18n.language) : endDate}
      endDateId="endDate"
      numberOfMonths={1}
      focusedInput={focusedInput}
      isOutsideRange={() => null}
      onDatesChange={handleDateChange}
      onFocusChange={handleFocusChange}
      startDate={startDate ? startDate.locale(i18n.language) : startDate}
      startDateId="startDate"
    />
  );
}

export default DateRangeSelector;
