import { FC } from 'react';
export interface StickyPortalProps {
    children: any;
    handleClose: () => void;
    refEl?: HTMLDivElement;
}
export declare const CONTENT_ID = "portal-content";
declare const StickyPortal: FC<StickyPortalProps>;
export default StickyPortal;
