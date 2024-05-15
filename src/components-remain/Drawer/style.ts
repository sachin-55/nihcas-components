import styled from 'styled-components';

import theme from '../../theme';

export const Backdrop = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: ${({ $open }) => ($open ? 'block' : 'none')};
`;

export const Logo = styled.img`
  height: 50px;
  width: 100px;
  margin-right: 8px;
  @media ${theme.breakpoints.md} {
    height: 50px;
    width: 120px;
  }
  cursor: pointer;
`;

export const DrawerStyled = styled.div<{
  $width: number;
  $placement: 'left' | 'right';
  $open: boolean;
}>`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: ${({ $placement }) => ($placement === 'left' ? '0px' : 'auto')};
  right: ${({ $placement }) => ($placement === 'right' ? '0px' : 'auto')};
  z-index: 99999;
  height: 100vh;
  width: ${({ $width }) => ($width ? `${$width}px` : '300px')};
  background: #fff;
  box-shadow: 0px 0px 5px 0px #dbdbdb;
  transform: ${({ $open, $placement }) =>
    $placement === 'left'
      ? !$open
        ? 'translatex(-200%)'
        : 'translateX(0%)'
      : !$open
        ? 'translatex(200%)'
        : 'translateX(0%)'};
  transition: 0.3s;
  & .drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ $placement }) =>
      $placement === 'right' ? '0px 20px 0px 0px' : '0px 0px 0px 20px'};
    flex-direction: ${({ $placement }) =>
      $placement === 'right' ? 'row-reverse' : 'row'};
    border-bottom: 1px solid #dbdbdb;
    & .close-icon {
      padding: 6px 8px;
      margin: 8px 8px 0px 0px;
      height: 24px;
      width: 24px;
      color: #808080;
    }
  }
  & .drawer-content {
  }
`;
