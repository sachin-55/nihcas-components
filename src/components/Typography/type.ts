import { ThemeType } from "../../theme";

export type SizeType = keyof ThemeType["fontSizes"];
export type FontWeightType = keyof ThemeType["fontWeights"];

export type FontFamilyType = keyof ThemeType["fontFamily"];
export type AsType = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";

export type FontColorType = keyof ThemeType["colors"];

export type StyleType = {
  $fontFamily: FontFamilyType;
  $size: SizeType;
  $fontWeight: FontWeightType;
  $inline?: boolean;
  $color: FontColorType;
  $margin?: string;
  $padding?: string;
};
