import styled from "styled-components";

export const AlertStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 10px 20px 10px 30px;
  width: 100%;

  & .alert-action-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  }

  & svg.close-icon {
    height: 24px;
    width: 24px;
  }

  &.info {
    background-color: ${({ theme }) => theme.colors?.info};
    color: ${({ theme }) => theme.colors?.cloudWhite};
    & svg.close-icon {
      path {
        fill: ${({ theme }) => theme.colors?.boneWhite};
      }
    }
  }
  &.success {
    background-color: ${({ theme }) => theme.colors?.success};
    color: ${({ theme }) => theme.colors?.cloudWhite};
    & svg.close-icon {
      path {
        fill: ${({ theme }) => theme.colors?.boneWhite};
      }
    }
  }
  &.error {
    background-color: ${({ theme }) => theme.colors?.success};
    color: ${({ theme }) => theme.colors?.cloudWhite};
    & svg.close-icon {
      path {
        fill: ${({ theme }) => theme.colors?.boneWhite};
      }
    }
  }
  &.warning {
    background-color: ${({ theme }) => theme.colors?.warning};
    color: ${({ theme }) => theme.colors?.cloudWhite};
    & svg.close-icon {
      path {
        fill: ${({ theme }) => theme.colors?.boneWhite};
      }
    }
  }
`;
