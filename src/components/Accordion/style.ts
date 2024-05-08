import styled from 'styled-components';

import { scrollCss } from '../../style/reusableStyle';

export const AccordionContainerStyled = styled.div`
  width: 100%;
`;
export const AccordionStyled = styled.div`
  width: 100%;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.disableButtonText};
  }
`;
export const AccordionTitle = styled.div<{
  $isOpen: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 30px;
  cursor: pointer;
  gap: 12px;
  & .title-icon-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
  }
  z-index: ${({ theme }) => theme.zIndices.base};
  & svg.chevron-icon {
    z-index: ${({ theme }) => theme.zIndices.hide};

    height: 12px;
    width: 12px;
    transition: 0.3s;
    transform: ${({ $isOpen }) =>
      !$isOpen ? 'rotate(-90deg)' : 'rotate(0deg)'};
  }
`;
export const AccordionContent = styled.div<{
  $isOpen: boolean;
  $maxHeight?: string;
}>`
  padding: ${({ $isOpen }) => (!$isOpen ? '0px 30px' : '12px 30px')};
  transition: all 0.5s;
  max-height: ${({ $isOpen, $maxHeight }) =>
    !$isOpen ? '0px' : $maxHeight || 'calc(100vh - 140px)'};

  overflow-y: auto;
  color: ${({ theme }) => theme.colors.normalText};

  ${scrollCss}
`;
