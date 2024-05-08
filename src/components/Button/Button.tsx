import { ComponentProps } from "react";
import { ButtonStyled } from "./style";
import { ThemeType } from "../../theme";

export type ButtonVariantType =
  | "primary"
  | "secondary"
  | "danger"
  | "solid"
  | "outline"
  | "gradient"
  | "no-style";

interface ButtonPropsType extends ComponentProps<"button"> {
  children?: React.ReactNode;
  variant?: ButtonVariantType;
  title?: string;

  borderRadius?: string;
  borderColor?: keyof ThemeType["colors"];
  bgColor?: keyof ThemeType["colors"];
  textColor?: keyof ThemeType["colors"];
  hoverColor?: keyof ThemeType["colors"];

  // Size Props
  width?: string;
  height?: string;
  fontSize?: keyof ThemeType["fontSizes"];
  padding?: string;
  margin?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: "submit" | "button" | "reset";

  // Icon Props
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconColor?: string;
}

const Button = ({
  children,
  variant = "primary",
  borderColor = "transparent",
  borderRadius = "12px",
  bgColor = "primary",
  textColor = "white",
  hoverColor = "secondary",
  width = "100%",
  height = "40px",
  fontSize = "h_normal",
  padding = "8px 20px",
  margin = "0px",
  title = "OK",
  ...restProps
}: ButtonPropsType) => {
  const renderText = (text: string) => {
    return text;
  };
  return (
    <ButtonStyled
      $bgColor={bgColor}
      $borderColor={borderColor}
      $borderRadius={borderRadius}
      $fontSize={fontSize}
      $height={height}
      $hoverColor={hoverColor}
      $margin={margin}
      $padding={padding}
      $textColor={textColor}
      $variant={variant}
      $width={width}
      {...restProps}
    >
      {typeof children === "string"
        ? renderText(children)
        : children || renderText(title)}
    </ButtonStyled>
  );
};

export default Button;
