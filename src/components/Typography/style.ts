import styled from 'styled-components';

import { ThemeType } from '../../theme';
import { FontColorType, StyleType, VariantType } from './type';

const getFontColors = (color: FontColorType, theme: ThemeType) => {
  const x = {
    light: theme.colors.border,
    dark: theme.colors.darkText,
    normal: theme.colors.normalText,
    disable: theme.colors.disableText,
    disableButton: theme.colors.disableButtonText,
    border: theme.colors.border,
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    white: theme.colors.white,
  }[color];
  if (x) {
    return x;
  }
  return color || theme.colors.normalText;
};

const getFontSizes = (variant: VariantType, size: number | undefined) => {
  if (size) {
    return `${size}px`;
  }

  switch (variant) {
    case 'heading':
      return '20px';
    case 'title':
      return '16px';
    case 'normal':
      return '14px';
    case 'caption':
      return '12px';
    case 'smallText':
      return '10px';
    default:
      return '14px';
  }
};

const TypographyStyled = styled.p<StyleType>`
  color: ${({ theme, $color }) => getFontColors($color, theme)};
  font-weight: ${({ theme, $strong }) =>
    $strong ? theme.fontWeights.bold : theme.fontWeights.medium};
  display: ${({ $inline }) => ($inline ? 'inline-block' : 'block')};
  font-size: ${({ $variant, $size }) => getFontSizes($variant, $size)};
  font-family: ${({ $fontFamily }) => $fontFamily || 'Raleway'};
  min-height: 1rem;
  line-height: 1.5rem;

  &.ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default TypographyStyled;
