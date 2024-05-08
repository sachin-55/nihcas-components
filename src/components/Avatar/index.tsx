import React from 'react';

import DefaultUserSVG from '../../assets/defaultUser.svg';
import { fake_avatar_url } from '../../utils';
import AvatarStyled from './style';

export type SizeType = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xsm' | number;

interface Props {
  style?: React.CSSProperties;
  size?: SizeType;
  src: string;
  [key: string]: unknown;
}

const Avatar = ({ size = 'sm', src, ...restProps }: Props) => {
  return (
    <AvatarStyled
      src={src || fake_avatar_url || DefaultUserSVG}
      $size={size}
      {...restProps}
    />
  );
};

export default Avatar;
