import styled from 'styled-components';

import {
  flexSpaceBetween,
  flexStart,
  scrollCss,
} from '../../style/reusableStyle';

export const SelectDropDownContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: ${({ theme }) => theme.zIndices.auto};
  cursor: pointer;
`;
export const SelectStyled = styled.div<{ $isVisible?: boolean }>`
  position: relative;
  width: 100%;
  padding: 8px 20px;
  padding-right: 30px;
  outline: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 14px;
  font-family: 'Raleway';
  text-align: left;
  ${flexStart}
  gap:18px;

  & svg {
    height: 20px;
    width: 20px;
  }
  & img {
    height: 20px;
    width: 20px;
  }

  &.focus {
    outline-width: 2px;
    outline-color: #000;
  }

  &.error {
    outline-color: ${({ theme }) => theme.colors.red.strong};
  }

  & .placeholder {
    color: ${({ theme }) => theme.colors.disableButtonText};
  }

  & svg.chevron-icon {
    position: absolute;
    right: 10px;
    top: 50%;

    height: 12px;
    width: 12px;
    transition: 0.3s;
    transform: ${({ $isVisible }) =>
      !$isVisible
        ? 'rotate(0deg) translateY(-50%)'
        : 'rotate(0deg) translateY(-50%)'};
  }
`;

export const OptionsContainerStyled = styled.div<{ $isVisible?: boolean }>`
  position: absolute;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 3px ${({ theme }) => theme.colors.border};
  top: calc(100% + 5px);
  left: 0px;
  right: 0px;
  overflow: auto;
  transition: 0.3s;
  max-height: ${({ $isVisible }) => ($isVisible ? '500px' : '0px')};
  border-radius: 6px;
  z-index: ${({ theme }) => theme.zIndices.dropdown};

  ${scrollCss}
`;

export const OptionStyled = styled.div`
  width: 100%;
  padding: 12px 30px;
  cursor: pointer;
  margin: 6px 0px;
  color: ${({ theme }) => theme.colors.normalText};

  &:hover {
    background: ${({ theme }) => theme.colors.lighterBackground};
    box-shadow: 0px 0px 1px ${({ theme }) => theme.colors.border};
  }

  ${flexSpaceBetween(10)}
`;

export const MultipleSelectedValueWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;

export const MultiSelectChip = styled.div`
  ${flexStart}
  gap:6px;
  background: ${({ theme }) => theme.colors.disable};
  padding: 6px 12px;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.normalText};

  & .close {
    height: 8px;
    cursor: pointer;
  }
`;
