import styled from 'styled-components';

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const DataCountInfoWrapper = styled.div``;

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PaginationButton = styled.div<{ $isActive?: boolean }>`
  height: 30px;
  width: 30px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.white : theme.colors.border};
  background: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.lightBackground};

  cursor: pointer;
`;
