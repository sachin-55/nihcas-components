import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as EscapePLanSVG } from '../../assets/icons/escape-plan.svg';
import { Drawer, Typography } from '../../designComponents';
import Store from '../../store';
import ActualSidebar from './ActualSidebar';
import { LargeScreenMenuContainer, SmallScreenMenuContainer } from './style';

const Sidebar = () => {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state: any) => state.showSidebar);
  const toggleMenu = () => {
    dispatch(Store.Actions.set('showSidebar', !showSidebar));
  };

  return (
    <div>
      <LargeScreenMenuContainer>
        <ActualSidebar />
      </LargeScreenMenuContainer>
      <SmallScreenMenuContainer>
        <Drawer
          placement="left"
          onClose={toggleMenu}
          open={showSidebar}
          width={385}
          header={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '60px',
                gap: '20px',
              }}
            >
              <EscapePLanSVG height={40} />
              <Typography strong variant="title">
                Esc Plan
              </Typography>
            </div>
          }
        >
          <ActualSidebar onClose={toggleMenu} />
        </Drawer>
      </SmallScreenMenuContainer>
    </div>
  );
};

export default Sidebar;
