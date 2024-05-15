import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import LeftSVG from '../../assets/icons/goBack.svg';

type Props = {
  navigateTo?: string;
};

const GoBackStyled = styled.div`
  margin-bottom: 20px;
  & .wrapper {
    display: inline-block;
    height: 24px;
    width: 24px;
    cursor: pointer;

    & img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
`;

const NavigateBack = ({ navigateTo }: Props) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    if (navigateTo) {
      navigate(navigateTo);
    } else {
      navigate(-1);
    }
  };

  return (
    <GoBackStyled>
      <div className="wrapper" onClick={handleGoBack}>
        <img src={LeftSVG} alt="back" />
      </div>
    </GoBackStyled>
  );
};

export default NavigateBack;
