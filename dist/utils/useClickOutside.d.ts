import { RefObject } from 'react';
/**
 * Triggers the handler on on-click on any element diferent from those defined
 * either inside the refs or the ids arrays.
 */
declare const useOnClickOutside: <T extends HTMLElement>(handler: () => void, refs: RefObject<T>[], ids?: string[]) => void;
export default useOnClickOutside;
