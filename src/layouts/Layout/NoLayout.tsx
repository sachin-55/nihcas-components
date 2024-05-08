import React from 'react';
import { Outlet } from 'react-router-dom';

import { ILayoutProps } from './type';

export interface INoLayoutProps extends ILayoutProps {}

const NoLayout: React.FunctionComponent<INoLayoutProps> = ({ children }) => {
  return children || <Outlet />;
};

export default NoLayout;
