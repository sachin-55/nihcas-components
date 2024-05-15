import styled from "styled-components";

import Typography from "../Typography";

export const FormContainerStyled = styled.div<{ $marginBottom?: string }>`
  width: 100%;
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "0px"};
`;

export const LabelWrapper = styled.div`
  margin-bottom: 10px;
`;

export const FormLabel = styled(Typography)`
  color: ${({ theme }) => theme.colors.normalText};

  &.error {
    color: ${({ theme }) => theme.colors.red.strong};
  }
`;
export const FormError = styled(Typography)`
  color: ${({ theme }) => theme.colors.red.strong};
  margin: 0px;
  padding: 0px;
`;
