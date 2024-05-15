import styled from 'styled-components';

import { scrollCss } from '../../style/reusableStyle';

export type StyledDateFieldType = {
  hasError: boolean;
};

export const StyledDateField = styled.div`
  width: 100%;
  position: relative;
  font-family: 'Raleway';
  & .react-datepicker-wrapper {
    width: 100%;
  }
  & .react-datepicker__input-container .react-datepicker__calendar-icon {
    padding: 13px;
    right: 10px;
  }
  & .date-picker {
    width: 100%;
    padding: 10px 30px;
    border: 1px solid #dbdbdd;
    border-radius: 0px;
    font-family: inherit;
    padding-left: 20px;
    font-size: 14px;
    font-weight: 500;
    &.error {
      outline-color: red;
      border-color: red;
    }
  }

  & .react-datepicker {
    width: calc(100%);
    max-width: 50vw;
  }
  & .react-datepicker-popper {
    width: 100%;
    font-family: Raleway;
  }

  & .react-datepicker__month-container {
    float: center;
    width: calc(100%);

    & .react-datepicker__header {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
    & .react-datepicker__current-month {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.2rem;
      font-family: Raleway;
    }
    & .react-datepicker__day-names {
      & .react-datepicker__day-name {
        color: #fff;
        font-family: Raleway;
      }
    }

    & .react-datepicker__day--selected {
      color: #fcfcfc;
      background: ${({ theme }) => theme.colors.secondary};
    }
    & .react-datepicker__day--today {
    }
  }

  & .react-datepicker__day-name,
  & .react-datepicker__day,
  & .react-datepicker__time-name {
    color: #000;
    font-weight: 500;
    display: inline-block;
    width: calc(100% / 8);
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
    font-size: 14px;
    font-family: Raleway;

    &--disabled {
      color: #dbdbdb;
    }
  }

  & .react-datepicker__day--outside-month {
    color: rgba(0, 0, 0, 0.4);
    font-weight: 300;
  }

  & .react-datepicker__month-select,
  & .react-datepicker__year-select {
    margin: 8px 0px;
    padding: 2px 6px;
    background: ${({ theme }) => theme.colors.secondary};
    color: #fcfcfc;
    border-radius: 6px;
    border-color: ${({ theme }) => theme.colors.white};

    & option {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
    }

    ${scrollCss}
  }

  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker__navigation-icon::before {
    border-color: ${({ theme }) => theme.colors.white};
  }
`;
