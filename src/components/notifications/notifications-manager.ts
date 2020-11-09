import { EventEmitter } from 'events';
import { ReactNode } from 'react';

export interface SystemNotification {
  id: number;
  type: ReactNode;
  content: ReactNode;
  duration?: number;
}

export interface Notification {
  type: ReactNode;
  content: ReactNode;
  duration?: number;
}

class NotificationsManager extends EventEmitter {
  listNotify: SystemNotification[] = [];

  constructor() {
    super();
    this.listNotify = [];
  }

  create(notify: Notification) {
    const defaultNotification: SystemNotification = {
      id: Date.now(),
      duration: 5000,
      ...notify,
    };

    this.listNotify.unshift(defaultNotification);
    this.emitChange();
  }

  remove(id: number) {
    this.listNotify = this.listNotify.filter((n) => id !== n.id);
    this.emitChange();
  }

  emitChange() {
    this.emit('CHANGE', this.listNotify);
  }

  addChangeListener(callback: (list: SystemNotification[]) => void) {
    this.addListener('CHANGE', callback);
  }

  removeChangeListener(callback: (list: SystemNotification[]) => void) {
    this.removeListener('CHANGE', callback);
  }
}

export default new NotificationsManager();
