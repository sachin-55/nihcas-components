import styled from 'styled-components';

import {
  flexEnd,
  multipleLineTextEllipse,
  scrollCss,
} from '../../style/reusableStyle';

export const TableContainer = styled.div<{ $maxHeight?: string }>`
  overflow-y: auto;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.disableButtonText};
  border-top: 1px solid ${({ theme }) => theme.colors.disableButtonText};
  max-height: ${({ $maxHeight }) => $maxHeight || 'auto'};
  padding-right: 8px;
  ${scrollCss}
`;

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
`;
export const TableHead = styled.thead<{ $bgColor?: string }>`
  // border-top: 1px solid ${({ theme }) => theme.colors.disableButtonText};
  border-bottom: 1px solid ${({ theme }) => theme.colors.disableButtonText};
  color: ${({ theme }) => theme.colors.secondaryText};
  background: ${({ theme, $bgColor }) => $bgColor || theme.colors.white};
  position: sticky;
  top: 0px;
  z-index: 5;
`;
export const TableBody = styled.tbody`
  color: ${({ theme }) => theme.colors.tableBody};
  position: relative;
`;

export const TableRow = styled.tr<{ $bgColor?: string }>`
  &.header {
    background: ${({ theme, $bgColor }) => $bgColor || theme.colors.white};
  }

  &.row-clickable {
    cursor: pointer;
    &:hover {
      background: ${({ theme }) => theme.colors.lightBackground};
    }
  }
`;
export const TableDataCell = styled.td`
  padding: 10px 0px;
  max-width: 200px;
  text-align: left;

  &:last-child.actions {
    text-align: right;
  }
`;
export const TableHeadCell = styled.th`
  padding: 12px 0px;
  text-align: left;

  &:last-child.actions {
    text-align: right;
  }
`;

export const TableFooter = styled.tfoot``;

export const HeaderTitleWrapper = styled.div`
  & .menu-icon {
    height: 12px;
    width: 12px;
  }
`;

export const LoadingStyled = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: ${({ theme }) => theme.zIndices.auto};
  background: rgba(200, 200, 200, 0.4);
`;

export const NodataStyled = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableCardViewContainer = styled.div`
  margin: 20px 0px;
  width: 100%;
`;

export const IndividualTableRow = styled.div`
  background: ${({ theme }) => theme.colors.lightBackground};
  border-radius: 6px;
  padding: 18px 24px;

  & + & {
    margin-top: 20px;
  }
`;

export const TableCardRow = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  & .heading {
    flex-shrink: 0;
  }
  & .ellipsis {
    ${multipleLineTextEllipse(2)}
  }

  & + & {
    margin-top: 6px;
  }

  &.actions {
    ${flexEnd(12)};
  }
`;
