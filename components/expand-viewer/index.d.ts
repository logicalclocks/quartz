import { FC } from 'react';
import { PopupProps } from '../popup';
export interface ExpandViewerProps {
    title?: string;
    NormalComponent: FC;
    BriefComponent: FC;
    popupProps?: Omit<PopupProps, 'children' | 'isOpen' | 'onClose'>;
}
declare const ExpandViewer: FC<ExpandViewerProps>;
export default ExpandViewer;
