import styled, { css } from "styled-components";
import { ThemeType } from "../../theme";
import { ButtonSizeType, ButtonVariantType } from "./Button";

type ButtonStyleProps = {
  $variant?: ButtonVariantType;

  $borderRadius?: string;
  $borderColor?: keyof ThemeType["colors"];
  $bgColor?: keyof ThemeType["colors"];
  $color?: keyof ThemeType["colors"];
  $hoverColor?: keyof ThemeType["colors"];
  $hoverBgColor?: keyof ThemeType["colors"];

  // Size Props
  $width?: string;
  $height?: string;
  $fontSize?: keyof ThemeType["fontSizes"];
  $padding?: string;
  $margin?: string;

  $fontWeight?: keyof ThemeType["fontWeights"];
  $fontFamily?: keyof ThemeType["fontFamily"];

  $size?: ButtonSizeType;
};

const defaultButton = css`
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  outline: none;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
`;

const getVariantWiseButton = (variant?: ButtonVariantType) => {
  switch (variant) {
    case "primary":
      return css<ButtonStyleProps>`
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
      `;
    case "secondary":
      return css<ButtonStyleProps>`
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.white};
      `;
    case "danger":
      return css<ButtonStyleProps>`
        background-color: ${({ theme }) => theme.colors.danger};
        color: ${({ theme }) => theme.colors.white};
      `;
    case "solid":
      return css<ButtonStyleProps>`
        background-color: ${({ theme, $bgColor }) =>
          $bgColor ? theme.colors[$bgColor] : theme.colors.primary};
        color: ${({ theme, $color }) =>
          $color ? theme.colors[$color] : theme.colors.white};
      `;
    case "outline":
      return css<ButtonStyleProps>`
        background-color: ${({ theme, $bgColor }) =>
          $bgColor ? theme.colors[$bgColor] : theme.colors.transparent};
        color: ${({ theme, $color }) =>
          $color ? theme.colors[$color] : theme.colors.primary};
        border: 2px solid
          ${({ theme, $borderColor }) =>
            $borderColor ? theme.colors[$borderColor] : theme.colors.primary};
      `;
    case "no-style":
      return css<ButtonStyleProps>`
        all: initial;
        cursor: pointer;
        box-sizing: border-box;
        color: inherit;
        max-width: fit-content;
      `;
    default:
      return css``;
  }
};

type ButtonOptionType = {
  height: string;
  fontSize: keyof ThemeType["fontSizes"];
  padding: string;
};
const buttonSizes: Record<ButtonSizeType, ButtonOptionType> = {
  xsm: {
    height: "30px",
    fontSize: "g_smallNormal",
    padding: "6px 16px",
  },
  sm: {
    height: "36px",
    fontSize: "h_normal",
    padding: "8px 20px",
  },
  md: {
    height: "42px",
    fontSize: "i_largeNormal",
    padding: "10px 24px",
  },
  lg: {
    height: "48px",
    fontSize: "j_title",
    padding: "12px 28px",
  },
  xl: {
    height: "54px",
    fontSize: "m_subheading",
    padding: "14px 32px",
  },
};

export const ButtonStyled = styled.button<ButtonStyleProps>`
  ${defaultButton};
  ${({ $variant }) => getVariantWiseButton($variant)};
  font-weight: ${({ theme, $fontWeight }) =>
    $fontWeight ? theme.fontWeights[$fontWeight] : theme.fontWeights.medium};

  font-size: ${({ theme, $fontSize, $size }) =>
    $fontSize
      ? theme.fontSizes[$fontSize]
      : $size
      ? theme.fontSizes[buttonSizes[$size].fontSize]
      : theme.fontSizes.h_normal};

  font-family: ${({ theme, $fontFamily }) =>
    $fontFamily ? theme.fontFamily[$fontFamily] : theme.fontFamily.Inter};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding, $size }) =>
    $padding ? $padding : $size ? buttonSizes[$size].padding : "8px 20px"};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  width: ${({ $width }) => $width};
  height: ${({ $height, $size }) =>
    $height ? $height : $size ? buttonSizes[$size].height : "36px"};
  min-height: fit-content;
  min-width: fit-content;

  &:hover:not(:disabled) {
    background-color: ${({ theme, $hoverBgColor }) =>
      $hoverBgColor ? theme.colors[$hoverBgColor] : theme.colors.transparent};
    color: ${({ theme, $hoverColor }) =>
      $hoverColor ? theme.colors[$hoverColor] : theme.colors.primary};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
