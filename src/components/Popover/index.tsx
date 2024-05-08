import React, { ReactNode, useRef } from 'react';

import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import { PopoverContainer, PopoverContent, TriggerElement } from './style';

type RenderProps = {
  closePopover: () => void;
};
export type PlacementType = 'left' | 'right' | 'center';

type Props = {
  trigger: React.ReactNode;
  children?: ((props: RenderProps) => ReactNode) | ReactNode;
  noPadding?: boolean;
  placement?: PlacementType;
  popoverStyle?: React.CSSProperties;
};

const Popover = ({
  trigger,
  children,
  noPadding = false,
  placement = 'center',
  popoverStyle = {},
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useDetectOutsideClick(containerRef, false);

  const handleTogglePopover = () => {
    if (typeof setIsVisible !== 'boolean') {
      setIsVisible(!isVisible);
    }
  };

  const closePopover = () => {
    handleTogglePopover();
  };
  return (
    <PopoverContainer ref={containerRef}>
      <TriggerElement onClick={handleTogglePopover}>{trigger}</TriggerElement>
      {isVisible && (
        <PopoverContent
          $noPadding={noPadding}
          $placement={placement}
          style={popoverStyle}
        >
          {typeof children === 'function'
            ? children({ closePopover })
            : children}
        </PopoverContent>
      )}
    </PopoverContainer>
  );
};

export default Popover;
