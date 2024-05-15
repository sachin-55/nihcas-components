import styled from 'styled-components';

import { LoaderSizeType } from '.';

const getSize = (size: LoaderSizeType): number => {
  if (typeof size === 'number') {
    return size;
  }

  switch (size) {
    case 'lg':
      return 48;
    case 'md':
      return 36;
    case 'sm':
      return 24;
    case 'xsm':
      return 18;
    default:
      return 36;
  }
};

export const LoaderStyled = styled.div<{
  size: LoaderSizeType;
  color?: string;
}>`
  height: ${({ size }) => getSize(size) + 'px' || '24px'};
  width: ${({ size }) => Math.floor(getSize(size) * 1.2) + 'px' || '24px'};
  & svg {
    height: 100%;
    width: 100%;
    path {
      stroke: ${({ color, theme }) => color || theme.colors.primary};
    }
    circle {
      stroke: ${({ color, theme }) => color || theme.colors.primary};
    }
  }
`;

export const LoaderWrapper = styled.div<{
  position?: 'center' | 'left' | 'right';
}>`
  display: flex;
  justify-content: ${({ position }) =>
    position === 'center'
      ? 'center'
      : position === 'left'
        ? 'start'
        : position === 'right'
          ? 'end'
          : 'center'};
  align-items: 'center';
`;
