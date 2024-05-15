import React from 'react';

import { ReactComponent as LoaderSVG } from '../../assets/loader.svg';
import { ReactComponent as SpinnerSVG } from '../../assets/spinner.svg';
import { LoaderStyled } from './style';

export type LoaderSizeType = 'sm' | 'md' | 'lg' | 'xsm' | number;

type LoaderType = 'spinner' | 'default' | 'infinite';

interface ILoaderProps extends React.ComponentProps<'div'> {
  size?: LoaderSizeType;
  color?: string;
  type?: LoaderType;
}

const Loader = ({
  size = 'md',
  color,
  type = 'default',
  ...restProps
}: ILoaderProps) => {
  return (
    <LoaderStyled size={size} color={color} {...restProps}>
      {['default', 'infinite'].includes(type) ? <LoaderSVG /> : <SpinnerSVG />}
    </LoaderStyled>
  );
};

export default Loader;
