import styled from 'styled-components';

import { flexStart } from '../../style/reusableStyle';

export const SidebarWrapper = styled.div`
  flex-shrink: 0;
  width: 385px;
  position: fixed;
  top: 60px;
  left: 0px;
  bottom: 0px;
  padding: 0px 0px 0px 0px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: ${({ theme }) => theme.zIndices.sidebar};
  background-color: ${({ theme }) => theme.colors.defaultButton};
  border-right: 1px solid #f0f0f0;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    width: 0.4em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 300px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 385px;
  }
`;

export const UserInfoContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  background-color: ${({ theme }) => theme.colors.defaultButton};
  padding: 36px 10px 20px 80px;

  ${flexStart};
  gap: 12px;
  margin-bottom: 50px;

  & .info-wrapper {
    width: calc(100% - 88px - 12px - 20px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 36px 10px 20px 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 36px 10px 20px 80px;
  }
`;

export const MenuListContainer = styled.div`
  & .children-container {
    margin: 18px 0px 18px 50px;
  }
`;

export const ItemWrapper = styled.div<{
  $isItemSelected: boolean;
}>`
  ${flexStart}
  gap:26px;

  padding-left: 80px;
  color: ${({ $isItemSelected, theme }) =>
    $isItemSelected ? theme.colors.secondary : theme.colors.normalText};

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    & svg.sidebar-icon {
      height: 20px;
      width: 20px;
      path {
        stroke: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  & svg.sidebar-icon {
    height: 20px;
    width: 20px;
    path {
      stroke: ${({ $isItemSelected, theme }) =>
        $isItemSelected ? theme.colors.secondary : theme.colors.normalText};
    }
  }

  & + & {
    margin-top: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding-left: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 80px;
  }
`;

export const SmallScreenMenuContainer = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`;

export const LargeScreenMenuContainer = styled.div`
  display: block;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;
