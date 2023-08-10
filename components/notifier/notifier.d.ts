import { AlertStatus, CreateToastFnReturn, ToastId, ToastPosition } from '@chakra-ui/react';
import { ReactNode } from 'react';
export interface INotification {
    /** Title of the alert. */
    title: string | ReactNode;
    /** Content under the title. */
    content: string | ReactNode;
    /** Duration in milliseconds. E.g. 5000 by default */
    duration?: number;
    /** Status e.g. warning, error, success */
    status?: AlertStatus;
    /** A unique ID that blocks other notifications with the same ID */
    uniqueId?: ToastId;
}
declare const buildNotifier: (toast: CreateToastFnReturn, status: AlertStatus) => (notification: INotification) => React.ReactNode;
type Notifier = ReturnType<typeof buildNotifier>;
export declare const useNotifier: () => {
    success: Notifier;
    error: Notifier;
    info: Notifier;
    warning: Notifier;
    closeAll: (options?: {
        positions?: ToastPosition[];
    }) => void;
    close: (toastId: number | string) => void;
};
export declare const createNotifier: (standaloneToast: CreateToastFnReturn) => {
    success: Notifier;
    error: Notifier;
    info: Notifier;
    warning: Notifier;
    closeAll: (options?: {
        positions?: ToastPosition[];
    }) => void;
    close: (toastId: number | string) => void;
};
export {};
