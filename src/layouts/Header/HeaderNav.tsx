import React from 'react';

import { ReactComponent as EscLogoSVG } from '../../assets/icons/escape-plan.svg';
import { Typography } from '../../designComponents';
import ActiveProfile from './ActiveProfile';
import NotificationPopover from './NotificationPopover';
import {
  HeaderNavContainerStyled,
  LogoWrapper,
  ProfileNotificationContainer,
} from './style';

const HeaderNav = () => {
  return (
    <HeaderNavContainerStyled>
      <LogoWrapper>
        <EscLogoSVG className="esc-logo" />
        <div className="logo-desc">
          <Typography variant="caption" fontColor="dark" strong>
            Evacuation Plans
          </Typography>
          <Typography variant="smallText">Saas Application</Typography>
        </div>
      </LogoWrapper>
      <ProfileNotificationContainer>
        <NotificationPopover />
        <ActiveProfile />
      </ProfileNotificationContainer>
    </HeaderNavContainerStyled>
  );
};

export default HeaderNav;
