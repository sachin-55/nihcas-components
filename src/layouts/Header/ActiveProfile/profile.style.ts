import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { flexStart } from '../../../style/reusableStyle';

export const ActiveProfileContainerStyled = styled.div`
  ${flexStart};
  gap: 16px;

  & .profile-info {
    ${flexStart};
    flex-direction: column;
    align-items: end;

    & .user-name {
      max-width: 250px;
    }
  }

  & .profile-avatar {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 8px;
    & .profile-info {
      & .user-name {
        max-width: 180px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    & .profile-info {
      & .user-name {
        max-width: 140px;
      }
    }
  }
`;
export const ProfilePopoverContentContainerStyled = styled.div`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightBackground};
  border-radius: 6px;
`;

export const LinkStyled = styled(Link)`
  ${flexStart};
  gap: 14px;
  text-decoration: none;
  padding: 10px;
  border-radius: 6px;

  & svg {
    height: 24px;
    width: 24px;
    color: ${({ theme }) => theme.colors.normalText};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBackground};
  }
`;
