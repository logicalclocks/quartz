/// <reference types="node" />
import { EventEmitter } from 'events';
import { ReactNode } from 'react';
export interface Notification {
    type: ReactNode;
    content: ReactNode;
    duration?: number;
    isError?: boolean;
}
export interface SystemNotification extends Notification {
    id: number;
}
declare class NotificationsManager extends EventEmitter {
    listNotify: SystemNotification[];
    constructor();
    create(notify: Notification): void;
    remove(id: number): void;
    emitChange(): void;
    addChangeListener(callback: (list: SystemNotification[]) => void): void;
    removeChangeListener(callback: (list: SystemNotification[]) => void): void;
    closeAllNotifications(): void;
}
declare const _default: NotificationsManager;
export default _default;
