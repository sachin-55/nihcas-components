import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import Typograpgy from '../Typography';
import {
  ActionWrapper,
  DataCountInfoWrapper,
  PaginationButton,
  PaginationContainer,
} from './style';
type PaginationType = {
  style?: React.CSSProperties;
  activePage: number;
  totalCount: number;
  limit: number;
  handlePagination: (paginationData: { page: number; limit: number }) => void;
  maxVisibleButtons?: number;
};

const Pagination = ({
  activePage,
  handlePagination,
  limit,
  totalCount,
  maxVisibleButtons = 4,
  ...restProps
}: PaginationType) => {
  const dataToShowInCurrentPage = activePage * limit;
  const dataFrom = dataToShowInCurrentPage - limit + 1;
  const dataTo =
    dataToShowInCurrentPage <= totalCount
      ? dataToShowInCurrentPage
      : dataToShowInCurrentPage - (dataToShowInCurrentPage - totalCount);
  const totalPages =
    Math.trunc(totalCount / limit) + (totalCount % limit > 0 ? 1 : 0);

  const onAction = (page: number) => {
    handlePagination({ page, limit });
  };

  const renderPaginationButtons = () => {
    if (totalPages <= maxVisibleButtons) {
      return Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (x, idx) => (
          <PaginationButton
            $isActive={x === activePage}
            onClick={() => onAction(x)}
            key={`${x}-${idx}`}
          >
            {x}
          </PaginationButton>
        )
      );
    }
    let firstBtn: string | number = '';
    let lastBtn: string | number = '';
    if (activePage < totalPages - 2) {
      lastBtn = 'next';
    } else {
      lastBtn = totalPages;
    }

    if (activePage <= 2) {
      firstBtn = 1;
    } else {
      firstBtn = 'prev';
    }

    const remainingLen = maxVisibleButtons - 2;

    const remainingBtns = Array.from(
      { length: remainingLen },
      (_, index) => index + 1
    ).reduce((acc, val, idx) => {
      if (activePage >= totalPages - remainingLen) {
        acc.push(totalPages - (remainingLen - idx));
      } else {
        if (firstBtn === 'prev') {
          acc.push(activePage + idx);
        } else {
          if (firstBtn === 1 && activePage === 1) {
            acc.push(activePage + val);
          } else if (firstBtn === 1 && activePage > 1) {
            acc.push(activePage + idx);
          }
        }
      }
      return acc;
    }, [] as number[]);

    const buttonsToShow = [firstBtn, ...remainingBtns, lastBtn];
    return buttonsToShow.map((val, idx) => {
      if (val === 'prev') {
        return (
          <PaginationButton
            onClick={() => onAction(activePage - 1)}
            key={`${val}-${idx}`}
          >
            <FaChevronLeft />
          </PaginationButton>
        );
      }
      if (val === 'next') {
        return (
          <PaginationButton
            onClick={() => onAction(activePage + 1)}
            key={`${val}-${idx}`}
          >
            <FaChevronRight />
          </PaginationButton>
        );
      }
      if (typeof val === 'number') {
        return (
          <PaginationButton
            $isActive={val === activePage}
            onClick={() => onAction(val)}
            key={`${val}-${idx}`}
          >
            {val}
          </PaginationButton>
        );
      }
      return null;
    });
  };

  return (
    <PaginationContainer {...restProps}>
      <DataCountInfoWrapper>
        <Typograpgy fontColor="border">
          Showing {dataFrom} - {dataTo} out of {totalCount}
        </Typograpgy>
      </DataCountInfoWrapper>

      <ActionWrapper>{renderPaginationButtons()}</ActionWrapper>
    </PaginationContainer>
  );
};

export default Pagination;
