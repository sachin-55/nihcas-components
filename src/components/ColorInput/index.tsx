import { useRef } from 'react';
import ColorPicker, { ColorObject } from 'react-pick-color';

import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Typography from '../Typography';
import { ColorPickerContainerStyled } from './style';

type Props = {
  onChange: (data: ColorObject) => void;
  value: string;
  label: string;
  [key: string]: any;
};

const ColorInput = ({ onChange, value, label, ...restProps }: Props) => {
  const colorPickerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useDetectOutsideClick(
    colorPickerRef,
    false
  );

  const toggleVisibility = () => {
    if (typeof setIsVisible === 'function') {
      setIsVisible((prev) => !prev);
    }
  };

  return (
    <ColorPickerContainerStyled
      ref={colorPickerRef}
      onClick={toggleVisibility}
      $color={value}
    >
      <div className="color-sample" />
      <Typography>{label}</Typography>
      <div></div>
      {isVisible && (
        <div
          className="color-picker-wrapper"
          onClick={(e) => e.stopPropagation()}
        >
          <ColorPicker
            color={value}
            onChange={onChange}
            combinations={'tetrad'}
            {...restProps}
          />
        </div>
      )}
    </ColorPickerContainerStyled>
  );
};

export default ColorInput;
