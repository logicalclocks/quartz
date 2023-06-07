import { FC } from 'react';
import { FlexProps } from 'rebass';
export interface NotificationContainerProps extends Omit<FlexProps, 'css'> {
}
declare const NotificationsContainer: FC<NotificationContainerProps>;
export default NotificationsContainer;
