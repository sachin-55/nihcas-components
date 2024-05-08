import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import { BodyStyled, MainLayoutStyled, MainWrapperStyled } from './styles';
import { ILayoutProps } from './type';

export interface ILandingPageLayoutProps extends ILayoutProps {}

const LandingPageLayout: React.FunctionComponent<ILandingPageLayoutProps> = ({
  children,
}) => {
  return (
    <MainLayoutStyled>
      <Header isPublic />
      <BodyStyled>
        <MainWrapperStyled $isPublic>
          {children || <Outlet />}
        </MainWrapperStyled>
      </BodyStyled>
    </MainLayoutStyled>
  );
};

export default LandingPageLayout;
