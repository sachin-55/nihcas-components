import React from 'react';

import TypographyStyled from './style';
import { AsType, FontColorType, FontFamilyType, VariantType } from './type';

export interface ITypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: VariantType;
  fontFamily?: FontFamilyType;
  fontColor?: FontColorType;
  size?: number | undefined;
  strong?: boolean;
  inline?: boolean;
  as?: AsType;
  style?: React.CSSProperties;
  ellipsis?: boolean;
  [key: string]: any;
}

const Typography = ({
  fontColor = 'normal',
  fontFamily = 'Raleway',
  inline = false,
  size = undefined,
  strong = false,
  variant = 'normal',
  children,
  as = 'p',
  ellipsis = false,
  className,
  ...restProps
}: ITypographyProps) => {
  return (
    <TypographyStyled
      as={inline ? 'span' : as}
      $inline={inline}
      $strong={strong}
      $color={fontColor}
      $fontFamily={fontFamily}
      $size={size}
      $variant={variant}
      className={`${className} ${ellipsis ? 'ellipsis' : ''}`}
      {...restProps}
    >
      {children}
    </TypographyStyled>
  );
};

export default Typography;
