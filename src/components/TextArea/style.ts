import styled from 'styled-components';

import { scrollCss } from '../../style/reusableStyle';

export const InputArea = styled.textarea<{ isActive?: boolean }>`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  // background: ${({ theme }) => theme.colors.white}
  background: inherit;
  resize: none;
  padding: 12px 22px;
  font-family: 'Raleway';
  line-height: 1.5rem;

  &:focus {
    outline-color: ${({ theme }) => theme.colors.black};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.disableButtonText};
  }

  &.error {
    outline-color: ${({ theme }) => theme.colors.red.strong};
    border-color: ${({ theme }) => theme.colors.red.strong};
  }

  ${scrollCss}
`;
