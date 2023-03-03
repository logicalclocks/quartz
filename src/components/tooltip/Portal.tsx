import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const el = document.createElement('div');
const Portal = ({ children }: React.PropsWithChildren) => {
  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  });

  return ReactDOM.createPortal(children, el);
};

export default Portal;
