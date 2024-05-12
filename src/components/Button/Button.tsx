import { ComponentProps } from "react";
import { ThemeType } from "../../theme";
import { ButtonStyled } from "./style";

export type ButtonVariantType =
  | "primary"
  | "secondary"
  | "danger"
  | "solid"
  | "outline"
  | "no-style";

export type ButtonSizeType = "xsm" | "sm" | "md" | "lg" | "xl";

interface ButtonPropsType extends ComponentProps<"button"> {
  children?: React.ReactNode;
  variant?: ButtonVariantType;
  title?: string;

  borderRadius?: string;
  borderColor?: keyof ThemeType["colors"];
  bgColor?: keyof ThemeType["colors"];
  hoverColor?: keyof ThemeType["colors"];
  hoverBgColor?: keyof ThemeType["colors"];

  // Size Props
  width?: string;
  height?: string;
  fontSize?: keyof ThemeType["fontSizes"];
  fontFamily?: keyof ThemeType["fontFamily"];
  color?: keyof ThemeType["colors"];
  fontWeight?: keyof ThemeType["fontWeights"];
  padding?: string;
  margin?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: "submit" | "button" | "reset";

  size?: ButtonSizeType;
}

const Button = ({
  children,
  variant = "primary",
  borderColor = "primary",
  borderRadius = "12px",
  bgColor,
  color,
  hoverColor = "whiteSmoke",
  hoverBgColor = "accent",
  width = "270px",
  height,
  fontSize,
  padding,
  margin = "0px",
  title = "OK",
  fontFamily = "Inter",
  fontWeight,
  isDisabled,
  isLoading,
  size = "sm",

  ...restProps
}: ButtonPropsType) => {
  return (
    <ButtonStyled
      $bgColor={bgColor}
      $borderColor={borderColor}
      $borderRadius={borderRadius}
      $fontSize={fontSize}
      $margin={margin}
      $padding={padding}
      $color={color}
      $variant={variant}
      $fontFamily={fontFamily}
      $fontWeight={fontWeight}
      $height={height}
      $width={width}
      $hoverColor={hoverColor}
      $hoverBgColor={hoverBgColor}
      $size={size}
      disabled={isDisabled || isLoading}
      {...restProps}
    >
      {children || title}
    </ButtonStyled>
  );
};

export default Button;
