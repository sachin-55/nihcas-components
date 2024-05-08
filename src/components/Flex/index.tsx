import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface FlexProps extends React.ComponentProps<'div'> {
  alignItems?: React.CSSProperties['alignItems'];
  justifyContent?: React.CSSProperties['justifyContent'];
  alignSelf?: React.CSSProperties['alignSelf'];
  gap?: React.CSSProperties['gap'];
  direction?: React.CSSProperties['flexDirection'];
  flex?: React.CSSProperties['flex'];
  wrap?: React.CSSProperties['flexWrap'];
  margin?: React.CSSProperties['margin'];
  padding?: React.CSSProperties['padding'];
  width?: React.CSSProperties['width'];
  inline?: boolean;
  [key: string]: any;
}

type Props = {
  style?: React.CSSProperties;
};

const Flex: React.FC<PropsWithChildren<Props & FlexProps>> = ({
  children,
  style,
  ...restProps
}) => {
  return (
    <FlexStyled style={style} {...restProps}>
      {children}
    </FlexStyled>
  );
};

export default Flex;

const FlexStyled = styled.div<FlexProps>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  width: ${({ inline, width }) => (inline ? 'auto' : width || '100%')};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-self: ${({ alignSelf }) => alignSelf};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction }) => direction};
  flex: ${({ flex }) => flex};
  flex-wrap: ${({ wrap }) => wrap};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;
