import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Sidebar from '../Sidebar';
import { BodyStyled, MainLayoutStyled, MainWrapperStyled } from './styles';
import { ILayoutProps } from './type';

export interface ILandingPageLayoutProps extends ILayoutProps {
  extraInfo?: any;
}

const LandingPageLayout: React.FunctionComponent<ILandingPageLayoutProps> = ({
  children,
  extraInfo,
}) => {
  return (
    <MainLayoutStyled>
      <Header />
      <BodyStyled>
        <Sidebar />
        <MainWrapperStyled $noPadding={extraInfo?.noPadding || false}>
          {children || <Outlet />}
        </MainWrapperStyled>
      </BodyStyled>
    </MainLayoutStyled>
  );
};

export default LandingPageLayout;
