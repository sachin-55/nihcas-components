import styled from 'styled-components';

import { Button } from '../../../designComponents';
import {
  flexCenter,
  flexSpaceBetween,
  scrollCss,
} from '../../../style/reusableStyle';

export const NotificationPopoverContainer = styled.div``;

export const NotificationTrigger = styled.div`
  &.notification-bell {
    position: relative;
    cursor: pointer;

    & .notification-icon {
      height: 26px;
      width: 26px;
    }
    & .red-dot {
      position: absolute;
      height: 18px;
      width: 18px;
      font-size: 12px;
      ${flexCenter(0)};
      background: ${({ theme }) => theme.colors.red.strong};
      border-radius: 50%;
      top: -4px;
      right: -6px;
      color: white;
      padding-bottom: 2px;
    }
  }
`;

export const NotificationContainer = styled.div`
  width: 400px;
  min-height: 500px;
  max-height: 520px;
  overflow: auto;
  padding: 10px 10px 0px 20px;
  margin: 10px 10px 10px 0px;
  position: relative;
  ${scrollCss};

  & .view-all-btn {
    background-color: ${({ theme }) => theme.colors.popoverBg};
    -webkit-position: sticky;
    position: sticky;
    bottom: 0px;
    margin: 10px 0px 0px;
    padding: 10px 0px 10px;

    ${flexCenter(6)}
  }
`;

export const IndividualNotificationWrapperStyled = styled.div`
  display: flex;
  gap: 12px;
  align-items: start;
  & p {
    max-width: 90%;
  }
  & .read-status {
    max-width: 98%;
    position: relative;
    & .red-dot {
      position: absolute;
      height: 8px;
      width: 8px;
      ${flexCenter(0)};
      // background: ${({ theme }) => theme.colors.red.strong};
      background: #ff6262;
      border-radius: 50%;
      top: 4px;
      right: 0px;
    }
  }

  & .notification-details {
    & .title {
      margin-bottom: 6px;
    }
    & .titleAndRole {
      ${flexSpaceBetween()}
    }
    width: 100%;
  }

  & .actions-wrapper {
    width: 100%;
    ${flexSpaceBetween(20)};
  }
`;

export const StyledButton = styled(Button)`
  padding: 0px 0px;
  height: auto;
  color: ${({ theme }) => theme.colors.border};
  background-color: inherit;
  border: none;
  font-size: 12px;
`;
