import React from 'react';
import { useTheme } from 'styled-components';

import { ReactComponent as CloseImgSVG } from '../../assets/icons/cross.svg';
import Button from '../Button';
import { Alert } from './style';

interface AlertComponentProps {
  style?: React.CSSProperties;
  text: string;
  type?: 'success' | 'warning' | 'info' | 'error';
  actions?: {
    label: string;
    action: () => void;
  };
  onClose?: () => void;
  className?: string;
}

const AlertComponent = ({
  style = {},
  actions,
  onClose,
  text,
  type = 'info',
  className,
}: AlertComponentProps) => {
  const colors = useTheme().colors;

  const getbgColor = (t: typeof type) => {
    if (t === 'error') {
      return colors?.red.faded;
    }
    if (t === 'info') {
      return colors?.blue.faded;
    }
    if (t === 'warning') {
      return colors?.yellow.faded;
    }
    if (t === 'success') {
      return colors?.green.faded;
    }
    return colors?.blue.faded;
  };
  return (
    <Alert className={`${className} ${type || 'info'}`} style={style}>
      <div className="text">{text}</div>
      <div className="action-wrapper">
        {!!actions && (
          <Button
            onClick={actions?.action}
            style={{
              padding: '0px 6px',
              flexShrink: 0,
              background: 'rgba(0,0,0,0.2)',
            }}
            bgColor={getbgColor(type)}
            size="xs"
          >
            {actions?.label}
          </Button>
        )}
        {onClose && (
          <Button
            onClick={onClose}
            style={{ padding: '0px' }}
            bgColor="transparent"
            size="xs"
          >
            <CloseImgSVG className="close-icon" />
          </Button>
        )}
      </div>
    </Alert>
  );
};

export default AlertComponent;
