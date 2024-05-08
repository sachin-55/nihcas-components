import React from 'react';
import { useTheme } from 'styled-components';

import { UserRolesType } from '../../@types';
import { ReactComponent as EscapePLanSVG } from '../../assets/icons/escape-plan.svg';
import escConstants from '../../constants';
import { useRoot } from '../../context/RootProvider';
import { Avatar, Tag, Typography } from '../../designComponents';
import { ThemeType } from '../../theme';
import { fake_avatar_url } from '../../utils';
import { UserInfoContainer } from './style';

const ProfileWithAvatar = () => {
  const theme: ThemeType = useTheme();
  const { auth: user } = useRoot();
  const userRole =
    user?.role || (escConstants.ACTIVE_USER_ROLE as UserRolesType);

  return (
    <UserInfoContainer>
      {userRole === 'ADMIN' ? (
        <EscapePLanSVG />
      ) : (
        <Avatar
          size={'xxl'}
          src={user?.avatar || fake_avatar_url + `?img=66`}
        />
      )}{' '}
      <div className="info-wrapper">
        <Typography variant="title" style={{ marginBottom: '5px' }}>
          {user?.fullName || 'Sachin Bhattarai'}
        </Typography>
        <Typography
          variant="caption"
          style={{ marginBottom: '5px' }}
          fontColor="border"
          ellipsis
        >
          {user?.emailAddress || 'sachinbhattarai.client@gmail.com'}
        </Typography>
        {userRole && (
          <Tag
            textColor={theme.colors[userRole]?.strong}
            bgColor={theme.colors[userRole]?.faded}
          >
            {userRole}
          </Tag>
        )}
      </div>
    </UserInfoContainer>
  );
};

export default ProfileWithAvatar;
