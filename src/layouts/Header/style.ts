import styled from 'styled-components';

import { flexStart } from '../../style/reusableStyle';

export const HeaderContainerStyled = styled.div`
  background: ${({ theme }) => theme?.colors?.defaultButton};
  padding: 6px 80px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: ${({ theme }) => theme.zIndices.header};
  border-bottom: 1px solid ${({ theme }) => theme?.colors?.disableButtonText};

  & .menu-icon {
    margin-right: 15px;
    cursor: pointer;
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 6px 20px;
  }
`;

export const HeaderNavContainerStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LogoWrapper = styled.div`
  ${flexStart};
  gap: 16px;

  & .esc-logo {
    height: 40px;
    width: 40px;
  }
  & .logo-desc {
    p {
      line-height: normal;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 10px;
    & .logo-desc {
      display: none;
    }
  }
`;

export const ProfileNotificationContainer = styled.div`
  ${flexStart};
  gap: 35px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 12px;
  }
`;

// --------------------------------------------------------------------------------------------------------
// SIDEBAR TOGGLE STYLE
export const SmallScreenMenuContainer = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: inline-block;
  }
`;
