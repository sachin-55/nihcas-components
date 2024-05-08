import React from "react";
import Typography from "../Typography";
import { useTheme } from "styled-components";

type Props = {
  error: string;
  style?: React.CSSProperties;
};

const FormError = ({ error, style, ...restProps }: Props) => {
  const theme = useTheme();
  return (
    <Typography
      color={theme.colors.red.strong}
      size={"xs"}
      style={{ margin: "5px 0px", ...style }}
      {...restProps}
    >
      {error}
    </Typography>
  );
};

export default FormError;
