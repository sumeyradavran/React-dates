import React from "react";
import moment from "moment";
import "moment/min/locales.min";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import i18n from "i18next";
import { withTranslation } from "react-i18next";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: null,
      focusedInput: null
    };
  }

  handleDateSelection = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  handleFocusChange = (focused) => {
    this.setState({ focusedInput: focused });
  };

  render() {
    const { endDate, startDate, focusedInput } = this.state;
    //moment.locale(i18n.language);
    return (
      <DateRangePicker
        endDate={endDate ? endDate.locale(i18n.language) : endDate}
        endDateId="your_unique_end_date_id"
        focusedInput={focusedInput}
        numberOfMonths={1}
        isOutsideRange={() => null}
        onDatesChange={this.handleDateSelection}
        onFocusChange={this.handleFocusChange}
        startDate={startDate ? startDate.locale(i18n.language) : startDate}
        startDateId="your_unique_start_date_id"
      />
    );
  }
}

export default withTranslation()(Calendar);
