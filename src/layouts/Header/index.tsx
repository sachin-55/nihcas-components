import { FiMenu } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import store from '../../store';
import HeaderNav from './HeaderNav';
import { HeaderContainerStyled, SmallScreenMenuContainer } from './style';
type Props = {
  isPublic?: boolean;
};
const Header = ({ isPublic = false }: Props) => {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state: any) => state.showSidebar);
  const toggleMenu = () => {
    dispatch(store.Actions.set('showSidebar', !showSidebar));
  };

  return (
    <HeaderContainerStyled>
      <SmallScreenMenuContainer>
        {!isPublic && (
          <FiMenu
            className="menu-icon"
            onClick={toggleMenu}
            height={22}
            width={22}
          />
        )}
      </SmallScreenMenuContainer>

      <HeaderNav />
    </HeaderContainerStyled>
  );
};

export default Header;
