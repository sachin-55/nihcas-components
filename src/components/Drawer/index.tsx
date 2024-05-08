import React from 'react';

import { ReactComponent as CloseSVG } from '../../assets/icons/cross.svg';
import { Backdrop, DrawerStyled } from './style';

type Props = {
  placement?: 'left' | 'right';
  onClose: () => void;
  open: boolean;
  width?: number;
  header?: React.ReactNode;
};
const Drawer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  onClose,
  open,
  header = <div />,
  placement = 'left',
  width = 260,
}) => {
  return (
    <>
      <Backdrop
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        $open={open}
      />
      <DrawerStyled $width={width} $placement={placement} $open={open}>
        <div className="backdrop" />
        <div className="drawer-header">
          {header}
          <div
            onClick={onClose}
            onKeyPress={onClose}
            role="button"
            tabIndex={0}
          >
            <CloseSVG style={{ margin: '0px 10px' }} height={20} width={20} />
          </div>
        </div>
        <div className="drawer-content">{children}</div>
      </DrawerStyled>
    </>
  );
};

export default Drawer;

Drawer.defaultProps = {
  header: <div />,
  placement: 'left',
  width: 260,
};
