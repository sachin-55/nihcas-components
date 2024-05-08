import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import notificationsApi from '../../../APIs/notifications';
import { ReactComponent as NotificationBellSVG } from '../../../assets/icons/Bell.svg';
import { ReactComponent as EscLogoSVG } from '../../../assets/icons/escape-plan.svg';
import {
  Avatar,
  Divider,
  Popover,
  Typography,
} from '../../../designComponents';
import { useResponsive } from '../../../hooks/useResponsive';
import Store from '../../../store';
import { PaginationType } from '../../../store/initialTypeTypes';
import { RootState } from '../../../store/selectors';
import {
  fake_avatar_url,
  humanReadableDateDifference,
  requestAPI,
} from '../../../utils';
import {
  IndividualNotificationWrapperStyled,
  NotificationContainer,
  NotificationPopoverContainer,
  NotificationTrigger,
  StyledButton,
} from './notification.style';

type IndividualNotificationPropsType = {
  notification: {
    _id: string;
    message?: string;
    user?: {
      id: string;
      avatar: string;
      fullname: string;
    };
    isRead: boolean;
    createdAt: Date;
    notifyFrom?: {};
  };
};

const IndividualNotification = ({
  notification,
}: IndividualNotificationPropsType) => {
  const isRead = notification.isRead;
  const notifications = useSelector(
    (state: RootState) => state.notifications.data
  );
  const dispatch = useDispatch();
  const updateLocalNotificationStatus = () => {
    const updateNotification = notifications.map((N) => {
      if (N._id === notification._id) {
        return {
          ...N,
          isRead: true,
        };
      }
      return N;
    });
    dispatch(Store.Actions.set('notifications.data', updateNotification));
  };

  const handleReadNotification = async () => {
    try {
      await requestAPI(
        notificationsApi.readNotifications({
          notificationId: [notification._id],
        })
      );
      updateLocalNotificationStatus();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <IndividualNotificationWrapperStyled>
      {/* <Avatar
        src={
          notification.user?.avatar || fake_avatar_url + `?${notification?._id}`
        }
        size={'md'}
        className="user-avatar"
      /> */}

      {notification?.notifyFrom ? (
        <Avatar
          src={
            notification.user?.avatar ||
            fake_avatar_url + `?${notification?._id}`
          }
          alt="proposal-user"
          size="md"
        />
      ) : (
        <EscLogoSVG />
      )}

      <div className="notification-details">
        {isRead ? (
          <Typography className="title">{notification.message}</Typography>
        ) : (
          <div className="read-status">
            <Typography className="title" style={{ fontWeight: 'bold' }}>
              {notification.message}
            </Typography>
            <div className="red-dot"></div>
          </div>
        )}

        <div className="actions-wrapper">
          <Typography variant="caption" fontColor="border">
            {humanReadableDateDifference(notification.createdAt)}
          </Typography>
          <StyledButton onClick={handleReadNotification}>
            Read this Notification
          </StyledButton>
        </div>
        <Divider />
      </div>
    </IndividualNotificationWrapperStyled>
  );
};

const NotificationPopover = () => {
  const { isTablet } = useResponsive();
  const navigate = useNavigate();

  const [_notificationReadStatus, setNotificationReadStatus] = useState<
    Array<boolean>
  >([]);

  const handleNavigate = () => {
    navigate('/notifications');
  };
  const notifications = useSelector(
    (state: RootState) => state.notifications.data
  );

  const countNotificaion = useSelector(
    (state: RootState) => state.notificationCount
  );
  const handleGetNotifications = async (myParams: PaginationType) => {
    try {
      await requestAPI(
        notificationsApi.getAllNotifications({
          params: {
            page: myParams.page,
            limit: myParams.limit,
          },
          action: 'set',
        })
      );
      setNotificationReadStatus(notifications);
    } catch (error) {
      console.log('Notification PopupError :', error);
    }
  };

  useEffect(() => {
    handleGetNotifications({ limit: 5, page: 1 });
  }, []);

  let notificationCount: number | string = countNotificaion.count;
  notificationCount = notificationCount > 9 ? '9+' : notificationCount;

  return (
    <NotificationPopoverContainer>
      <Popover
        trigger={
          <NotificationTrigger className="notification-bell">
            {notificationCount == 0 && notificationCount < 1 ? (
              <NotificationBellSVG className="notification-icon" />
            ) : (
              <div>
                <NotificationBellSVG className="notification-icon" />
                <span className="red-dot">{notificationCount}</span>
              </div>
            )}
          </NotificationTrigger>
        }
        noPadding
        popoverStyle={{
          left: !isTablet ? 'calc(100% + 35px)' : 'inherit',
        }}
      >
        {({ closePopover }) => (
          <NotificationContainer>
            {notifications?.slice(0, 5).map((notification) => {
              return (
                <IndividualNotification
                  key={notification.id}
                  notification={notification}
                />
              );
            })}

            <div className="view-all-btn">
              <StyledButton
                onClick={() => {
                  handleNavigate();
                  closePopover();
                }}
              >
                View All Notification
              </StyledButton>
            </div>
          </NotificationContainer>
        )}
      </Popover>
    </NotificationPopoverContainer>
  );
};

export default NotificationPopover;
