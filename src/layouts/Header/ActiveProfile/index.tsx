import { IoLogOutOutline } from 'react-icons/io5';

import { Avatar, Popover, Typography } from '../../../designComponents';
import { LOG_OUT_ROUTE } from '../../../routes/routePaths';
import { fake_avatar_url } from '../../../utils';
import {
  ActiveProfileContainerStyled,
  LinkStyled,
  ProfilePopoverContentContainerStyled,
} from './profile.style';

const ActiveProfile = () => {
  return (
    <ActiveProfileContainerStyled>
      <div className="profile-info">
        <Typography className="user-name" ellipsis>
          Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr.
        </Typography>
        <Typography variant="caption" fontColor="border">
          Nepal
        </Typography>
      </div>
      <Popover
        trigger={
          <Avatar
            src={fake_avatar_url + `?img=15`}
            size={'md'}
            alt="profile"
            className="profile-avatar"
          />
        }
        placement="right"
        noPadding
      >
        <ProfilePopoverContentContainerStyled>
          <LinkStyled to={LOG_OUT_ROUTE}>
            <IoLogOutOutline />
            <Typography>Logout</Typography>
          </LinkStyled>
        </ProfilePopoverContentContainerStyled>
      </Popover>
    </ActiveProfileContainerStyled>
  );
};

export default ActiveProfile;
