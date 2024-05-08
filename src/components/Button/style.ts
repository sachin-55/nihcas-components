import styled, { css } from "styled-components";
import { ThemeType } from "../../theme";
import { ButtonVariantType } from "./Button";

type ButtonStyleProps = {
  $variant: ButtonVariantType;

  $borderRadius: string;
  $borderColor: keyof ThemeType["colors"];
  $bgColor: keyof ThemeType["colors"];
  $textColor: keyof ThemeType["colors"];
  $hoverColor: keyof ThemeType["colors"];

  // Size Props
  $width: string;
  $height: string;
  $fontSize: keyof ThemeType["sizes"];
  $padding: string;
  $margin: string;
};

const defaultButton = css``;

export const ButtonStyled = styled.button<ButtonStyleProps>`
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  ${defaultButton};

  all: initial;
  cursor: pointer;
  box-sizing: border-box;
`;
