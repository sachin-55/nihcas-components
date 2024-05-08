import { styled } from 'styled-components';

export const MainLayoutStyled = styled.div``;

export const NoLayoutStyled = styled.div``;

export const BodyStyled = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: calc(100vh - 60px);
  position: relative;
  padding-top: 60px;
`;

export const MainWrapperStyled = styled.main<{
  $isPublic?: boolean;
  $noPadding?: boolean;
}>`
  width: 100%;
  padding: ${({ $noPadding }) =>
    $noPadding ? '0px 0px 0px 0px' : '12px 30px 12px 30px'};
  flex: 1;
  padding-left: ${({ $isPublic, $noPadding }) =>
    $isPublic
      ? '20px'
      : $noPadding
        ? 'calc(385px + 0px)'
        : 'calc(385px + 20px)'};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: ${({ $noPadding }) =>
      $noPadding ? '0px 0px 0px 0px' : '12px 20px 12px 20px'};
    padding-left: ${({ $isPublic, $noPadding }) =>
      $isPublic
        ? '20px'
        : $noPadding
          ? 'calc(300px + 0px)'
          : 'calc(300px + 20px)'};

    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ $noPadding }) =>
      $noPadding ? '0px 0px 0px 0px' : '12px 20px 12px 20px'};
    padding-left: ${({ $isPublic, $noPadding }) =>
      $isPublic ? '20px' : $noPadding ? 'calc(0px + 0px)' : 'calc(0px + 20px)'};

    width: 100%;
  }
`;
