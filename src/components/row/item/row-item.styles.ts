import { ITableItemStyles } from './types';
import { Mode } from '../container/types';

export default function ({ position, mode, fillSpace }: ITableItemStyles) {
  return {
    width: fillSpace ? '100%' : 'auto',
    textAlign: position,
    py: mode === Mode.full ? '12px' : '8px',
    px: mode === Mode.full ? '20px' : '4px',
    ':first-of-type': { pl: '8px' },
    ':last-of-type': { pr: '8px' },
  };
}
