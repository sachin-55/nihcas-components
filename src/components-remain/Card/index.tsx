import React from 'react';
import styled from 'styled-components';

interface CardProps extends React.ComponentProps<'div'> {
  style?: React.CSSProperties;
  padding?: string;
}

const CardStyled = styled.div<{ $padding?: string }>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.disable};
  padding: ${({ $padding }) => $padding || '20px'};
  border-radius: 10px;
`;

const Card = ({ style, children, padding, ...restProps }: CardProps) => {
  return (
    <CardStyled style={style} $padding={padding} {...restProps}>
      {children}
    </CardStyled>
  );
};

export default Card;
