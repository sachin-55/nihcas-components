import React from "react";
import styled from "styled-components";

import Typography from "../Typography";

export const FormError = styled(Typography)`
  color: ${({ theme }) => theme.colors.red.strong};
  margin: 0px;
  padding: 0px;
`;

type Props = {
  text: string;
};

const ErrorMessage = ({ text }: Props) => {
  return <FormError>{text}</FormError>;
};

export default ErrorMessage;
