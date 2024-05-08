import styled from 'styled-components';

import { flexStart } from '../../style/reusableStyle';

export const ColorPickerContainerStyled = styled.div<{ $color: string }>`
  ${flexStart};
  gap: 10px;
  flex-wrap: nowrap;
  outline: 1px solid ${({ theme }) => theme.colors.transparent};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 7px 20px;

  &:focus-within {
    &.input-container {
      outline-color: ${({ theme }) => theme.colors.black};
      border: 1px solid ${({ theme }) => theme.colors.black};
    }
  }

  &:focus-within&.error {
    outline-color: ${({ theme }) => theme.colors.red.strong};
    border-color: ${({ theme }) => theme.colors.red.strong};
  }

  &.error {
    border-color: ${({ theme }) => theme.colors.red.strong};
  }
  position: relative;
  & .color-sample {
    height: 25px;
    width: 25px;
    background: ${({ $color }) => $color};
  }

  & .color-picker-wrapper {
    z-index: ${({ theme }) => theme.zIndices.dropdown};
    position: absolute;
    top: calc(100% + 10px);
    left: 0px;
  }
`;
