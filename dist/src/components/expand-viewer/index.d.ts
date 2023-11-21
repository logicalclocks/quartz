/// <reference types="react" />
import { PopupProps } from '../popup';
export interface ExpandViewerProps {
    title?: string;
    NormalComponent: React.FC;
    BriefComponent: React.FC;
    popupProps?: Omit<PopupProps, 'children' | 'isOpen' | 'onClose'>;
}
declare const ExpandViewer: ({ title, NormalComponent, BriefComponent, popupProps, }: ExpandViewerProps) => import("react/jsx-runtime").JSX.Element;
export default ExpandViewer;
