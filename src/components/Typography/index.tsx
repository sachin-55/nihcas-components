import React from "react";

import TypographyStyled from "./style";
import {
  AsType,
  FontColorType,
  FontFamilyType,
  FontWeightType,
  SizeType,
} from "./type";

export interface ITypographyProps extends React.HTMLAttributes<HTMLElement> {
  fontFamily?: FontFamilyType;
  color?: FontColorType;
  size?: SizeType;
  fontWeight?: FontWeightType;
  inline?: boolean;
  as?: AsType;
  style?: React.CSSProperties;
  ellipsis?: boolean;
  margin?: string;
  padding?: string;
  [key: string]: any;
}

const Typography = ({
  color = "black",
  fontFamily = "Inter",
  inline = false,
  size = "h_normal",
  fontWeight = "regular",
  children,
  as = "p",
  ellipsis = false,
  className,
  margin = "0px",
  padding = "0px",
  ...restProps
}: ITypographyProps) => {
  return (
    <TypographyStyled
      as={inline ? "span" : as}
      $inline={inline}
      $color={color}
      $fontFamily={fontFamily}
      $size={size}
      $fontWeight={fontWeight}
      $margin={margin}
      $padding={padding}
      className={`${className} ${ellipsis ? "ellipsis" : ""}`}
      {...restProps}
    >
      {children}
    </TypographyStyled>
  );
};

export default Typography;
