import styled from 'styled-components';

export const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 10px 20px 10px 30px;
  width: 100%;
  & .text {
    font-size: 14px;
    font-weight: 500;
    font-family: Raleway;
  }

  & .action-wrapper {
    display: flex;
    align-items: center;
  }
  & svg.close-icon {
    height: 10px;
    width: 10px;
  }

  &.info {
    background-color: ${({ theme }) => theme.colors?.blue.faded};
    color: ${({ theme }) => theme.colors?.blue.strong};
    & svg.close-icon {
      path {
        fill: ${({ theme }) => theme.colors?.blue.strong};
      }
    }
  }
  &.success {
    background-color: ${({ theme }) => theme.colors?.green.faded};
    color: ${({ theme }) => theme.colors?.green.strong};
    & svg.close-icon {
      path {
        fill: ${({ theme }) => theme.colors?.green.strong};
      }
    }
  }
  &.error {
    background-color: ${({ theme }) => theme.colors?.red.faded};
    color: ${({ theme }) => theme.colors?.red.strong};
    & svg.close-icon {
      path {
        fill: ${({ theme }) => theme.colors?.red.strong};
      }
    }
  }
  &.warning {
    background-color: ${({ theme }) => theme.colors?.yellow.faded};
    color: ${({ theme }) => theme.colors?.yellow.strong};
    & svg.close-icon {
      path {
        fill: ${({ theme }) => theme.colors?.yellow.strong};
      }
    }
  }
`;
