export type VariantType =
  | 'heading'
  | 'title'
  | 'normal'
  | 'caption'
  | 'smallText';

export type FontFamilyType = 'Raleway' | 'Libre Franklin';
export type AsType = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';

export type FontColorType =
  | 'light'
  | 'dark'
  | 'normal'
  | 'disable'
  | 'disableButton'
  | 'border'
  | 'primary'
  | 'secondary'
  | 'white';

export type StyleType = {
  $variant: VariantType;
  $fontFamily: FontFamilyType;
  $size: number | undefined;
  $strong: boolean;
  $inline?: boolean;
  $color: FontColorType;
};
