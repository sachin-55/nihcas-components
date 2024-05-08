import React from "react";

import Typography from "../Typography";
import {
  FormContainerStyled,
  FormError,
  FormLabel,
  LabelWrapper,
} from "./style";

type Props = {
  label: string;
  subLabel?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  marginBottom?: string;
  error?: string;
  [key: string]: any;
};

const FormContainer = ({
  children,
  label,
  error,
  style,
  className,
  marginBottom = "30px",
  subLabel,
  ...restProps
}: Props) => {
  return (
    <FormContainerStyled
      style={style}
      className={className}
      $marginBottom={marginBottom}
      {...restProps}
    >
      <LabelWrapper>
        <FormLabel className={error ? "error" : "normal-label"}>
          {label}
        </FormLabel>
        {subLabel && (
          <Typography variant="caption" fontColor="border">
            {" "}
            {subLabel}
          </Typography>
        )}
      </LabelWrapper>
      {React.isValidElement(children) &&
        React.cloneElement(children as React.ReactElement<any>, {
          error: !!error,
        })}
      {error && <FormError>{error}</FormError>}
    </FormContainerStyled>
  );
};

export default FormContainer;
