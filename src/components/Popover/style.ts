import styled, { css } from 'styled-components';

import { PlacementType } from '.';

export const PopoverContainer = styled.div`
  position: relative;
  display: inline-block;
`;
export const TriggerElement = styled.div`
  cursor: pointer;
`;

const getPopoverPlacement = (type: PlacementType) => {
  switch (type) {
    case 'center':
      return css`
        left: 50%;
        transform: translateX(-50%);
      `;
    case 'left':
      return css`
        left: 0%;
      `;
    case 'right':
      return css`
        right: 0%;
      `;
    default:
      return css`
        left: 50%;
        transform: translateX(-50%);
      `;
  }
};

export const PopoverContent = styled.div<{
  $noPadding?: boolean;
  $placement: PlacementType;
}>`
  position: absolute;
  top: calc(100% + 5px);
  ${({ $placement }) => getPopoverPlacement($placement)};
  min-width: 100%;
  z-index: ${({ theme }) => theme.zIndices.popover};
  border-radius: 4px;
  padding: ${({ $noPadding }) => ($noPadding ? '0px' : '20px')};
  background-color: ${({ theme }) => theme.colors.popoverBg};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
`;
