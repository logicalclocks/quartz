import { AlertStatus, ToastId } from '@chakra-ui/react';
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
export declare const useNotifier: () => {
    success: (notification: INotification) => ToastId | null;
    error: (notification: INotification) => ToastId | null;
    info: (notification: INotification) => ToastId | null;
    warning: (notification: INotification) => ToastId | null;
    closeAll: (options?: import("@chakra-ui/toast/dist/toast.types-f226a101").c | undefined) => void;
    close: (id: ToastId) => void;
};
export declare const createNotifier: () => {
    success: (notification: INotification) => ToastId | null;
    error: (notification: INotification) => ToastId | null;
    info: (notification: INotification) => ToastId | null;
    warning: (notification: INotification) => ToastId | null;
    closeAll: (options?: import("@chakra-ui/toast/dist/toast.types-f226a101").c | undefined) => void;
    close: (id: ToastId) => void;
};
