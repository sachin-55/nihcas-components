import styled from 'styled-components';

import Image from '../Image';
import { SizeType } from '.';

const getSizes = (size: SizeType) => {
  if (typeof size === 'number') {
    return `${size}px`;
  }
  switch (size) {
    case 'xxl':
      return '88px';
    case 'xl':
      return '65px';
    case 'lg':
      return '47px';
    case 'md':
      return '34px';
    case 'sm':
      return '31px';
    case 'xsm':
      return '25px';

    default:
      return '34px';
  }
};

const AvatarStyled = styled(Image)<{ $size: SizeType }>`
  height: ${({ $size }) => getSizes($size)};
  width: ${({ $size }) => getSizes($size)};
  object-fit: cover;
  border-radius: 50%;
`;

export default AvatarStyled;
