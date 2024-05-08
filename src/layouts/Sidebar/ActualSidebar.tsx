import { useLocation, useNavigate } from 'react-router-dom';

import { UserRolesType } from '../../@types';
import escConstants from '../../constants';
import { useRoot } from '../../context/RootProvider';
import { Typography } from '../../designComponents';
import ProfileWithAvatar from './ProfileWithAvatar';
import { getFilteredMenu, MenuItemType } from './sidebarMenu';
import { ItemWrapper, MenuListContainer, SidebarWrapper } from './style';

type Props = {
  onClose?: () => void;
};

const ActualSidebar = ({ onClose }: Props) => {
  const { auth: user } = useRoot();
  const userRole =
    user?.role || (escConstants.ACTIVE_USER_ROLE as UserRolesType);
  const navigate = useNavigate();
  const menuList = getFilteredMenu(userRole);

  const { pathname } = useLocation();

  const handleRouteNavigation = (path: string) => {
    navigate(path);
    if (onClose) {
      onClose();
    }
  };

  const isActive = (path: string) => {
    if (path) {
      const splittedPathName = pathname.split('/');
      const splittedPath = path.split('/');

      return splittedPathName[1] === splittedPath[1];
    }
    return false;
  };

  const renderMenuItem = (menu: Partial<MenuItemType>) => {
    return (
      <ItemWrapper
        key={menu?.key}
        $isItemSelected={isActive(menu?.path ? menu?.path : '')}
        onClick={() => menu?.path && handleRouteNavigation(menu?.path)}
      >
        {menu?.icon && <menu.icon className="sidebar-icon" />}
        <Typography style={{ color: 'inherit' }}>{menu?.label}</Typography>
      </ItemWrapper>
    );
  };

  return (
    <SidebarWrapper>
      <ProfileWithAvatar />
      <MenuListContainer>
        {menuList.map((menu) => {
          if (Array.isArray(menu?.children) && menu?.children?.length > 0) {
            return (
              <>
                {renderMenuItem(menu)}
                <div className="children-container">
                  {menu?.children?.map((child) => renderMenuItem(child))}
                </div>
              </>
            );
          }
          return renderMenuItem(menu);
        })}
      </MenuListContainer>
    </SidebarWrapper>
  );
};

export default ActualSidebar;
