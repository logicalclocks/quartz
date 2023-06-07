/// <reference types="react" />
export interface StickyPortalProps {
    children: any;
    handleClose: () => void;
    refEl?: HTMLDivElement;
}
export declare const CONTENT_ID = "portal-content";
declare const StickyPortal: ({ children, refEl, handleClose }: StickyPortalProps) => import("react").ReactPortal;
export default StickyPortal;
