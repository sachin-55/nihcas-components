import React, { ReactNode } from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';

import Typography from '../Typography';

const CardContainer = styled.div`
  width: 200px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  /* background-color: black; */
  border-radius: 10px;
  background-color: #ebebeb;

  & svg,
  & img {
    height: 24px;
    width: 24px;
  }
`;

interface CustomComponentProps {
  style?: React.CSSProperties;
  label: string;
  icon: ReactNode | string;
  value: number;
  [key: string]: any;
}

const CustomComponent: React.FC<CustomComponentProps> = ({
  style,
  label,
  icon,
  value,
  ...restProps
}) => {
  return (
    <CardContainer style={style} {...restProps}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'black',
        }}
      >
        <div style={{ fontSize: '14px' }}>{label}</div>
        {icon}
      </div>
      <CountUp start={0} end={value} duration={2.5} separator=",">
        {({ countUpRef }) => (
          <Typography style={{ fontSize: '20px', color: 'black' }}>
            <span ref={countUpRef} />
          </Typography>
        )}
      </CountUp>
    </CardContainer>
  );
};

export default CustomComponent;
