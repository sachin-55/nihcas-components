import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment';
import React from 'react';
import ReactDatePicker from 'react-datepicker';

import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg';
import { StyledDateField } from './style';

type DateFieldType = {
  name?: string;
  value: Date | undefined | null;
  onChange: (value: Date, formattedDate: string) => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  error?: boolean | undefined;
  setFieldValue?: Function;
  format?: string;
  placeholder?: string;
  onModal?: boolean;
  showSelector?: boolean;
  [rest: string]: any;
};

export const DATE_FORMAT = 'YYYY-MM-DD';

const DatePicker = ({
  name,
  value,
  onBlur,
  error,
  setFieldValue,
  placeholder = 'Click to select a date.',
  format = 'yyyy/MM/dd',
  onChange,
  onModal = false,
  showSelector = true,
  ...restProps
}: DateFieldType) => {
  const handleChange = (date: Date) => {
    const formattedDate = moment(date).format(DATE_FORMAT);
    if (setFieldValue) {
      setFieldValue(name, date);
      setFieldValue(name + '-formatted', formattedDate);
    }
    onChange(date, formattedDate);
  };

  return (
    <StyledDateField>
      <ReactDatePicker
        placeholderText={placeholder}
        onBlur={onBlur}
        name={name}
        selected={value}
        onChange={handleChange}
        dateFormat={format}
        className={error ? 'date-picker error' : 'date-picker'}
        closeOnScroll={true}
        icon={<CalendarIcon />}
        showIcon
        withPortal={onModal}
        showPopperArrow={false}
        peekNextMonth
        showMonthDropdown={showSelector}
        showYearDropdown={showSelector}
        dropdownMode="select"
        {...restProps}
      />
    </StyledDateField>
  );
};

export default DatePicker;
