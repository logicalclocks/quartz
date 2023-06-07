import { FC } from 'react';
import { FlexProps } from 'rebass';
import { SystemNotification } from './notifications-manager';
export interface NotificationsItemsContainerProps extends Omit<FlexProps, 'css'> {
    notifications: SystemNotification[];
}
declare const NotificationsItemsContainer: FC<NotificationsItemsContainerProps>;
export default NotificationsItemsContainer;
