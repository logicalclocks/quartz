import { createPortal } from 'react-dom';
import { useCallback, useEffect, useRef } from 'react';

export interface StickyPortalProps {
  children: any;
  handleClose: () => void;
  refEl?: HTMLDivElement;
}

export const CONTENT_ID = 'portal-content';

const StickyPortal = ({ children, refEl, handleClose }: StickyPortalProps) => {
  const rootElemRef = useRef(document.createElement('div'));

  useEffect(() => {
    const element = rootElemRef.current;
    document.body.appendChild(rootElemRef.current);

    const refElPos = refEl?.getBoundingClientRect();
    const content = element.children[0] as HTMLElement;
    content.setAttribute('id', CONTENT_ID);

    if (refElPos) {
      content.style.top = `${refElPos.top + refElPos.height}px`;
      content.style.left = `${refElPos.left}px`;
    }
    return () => {
      if (element) {
        document.body.removeChild(element);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(children, rootElemRef.current);
};

export default StickyPortal;
