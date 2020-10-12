import { BarSizes } from './types';

const getSize = (size: BarSizes) => (size === 'm' ? '100px' : '60px');

export default getSize;
