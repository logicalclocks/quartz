import { createPortal } from 'react-dom';
import { FC, useEffect, useRef } from 'react';

export interface StickyPortalProps {
  children: any;
  refEl?: HTMLDivElement;
}

const StickyPortal: FC<StickyPortalProps> = ({ children, refEl }) => {
  const rootElemRef = useRef(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(rootElemRef.current);

    const refElPos = refEl?.getBoundingClientRect();
    const content = rootElemRef.current.children[0] as HTMLElement;

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

  return createPortal(children, rootElemRef.current);
};

export default StickyPortal;
