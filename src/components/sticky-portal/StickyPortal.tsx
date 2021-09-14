import { createPortal } from 'react-dom';
import { FC, useCallback, useEffect, useRef } from 'react';

export interface StickyPortalProps {
  children: any;
  handleClose: () => void;
  refEl?: HTMLDivElement;
}

export const CONTENT_ID = 'portal-content';

const StickyPortal: FC<StickyPortalProps> = ({
  children,
  refEl,
  handleClose,
}: StickyPortalProps) => {
  const rootElemRef = useRef(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(rootElemRef.current);

    const refElPos = refEl?.getBoundingClientRect();
    const content = rootElemRef.current.children[0] as HTMLElement;
    content.setAttribute('id', CONTENT_ID);

    if (refElPos) {
      content.style.top = `${refElPos.top + refElPos.height}px`;
      content.style.left = `${refElPos.left}px`;
    }
    return () => {
      if (rootElemRef.current) {
        document.body.removeChild(rootElemRef.current);
      }
    };
  }, [refEl]);

  const listenerAction = useCallback(
    (event: Event) => {
      if ((event?.target as HTMLElement).id === CONTENT_ID) return;
      if (typeof handleClose === 'function') handleClose();
    },
    [handleClose],
  );

  useEffect(() => {
    // Close portal on outside interactions
    window.addEventListener('scroll', listenerAction, true);
    window.addEventListener('resize', listenerAction, true);
    return () => {
      window.removeEventListener('scroll', listenerAction, true);
      window.removeEventListener('resize', listenerAction, true);
    };
  }, []);

  return createPortal(children, rootElemRef.current);
};

export default StickyPortal;
