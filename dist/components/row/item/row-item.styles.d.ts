import { ITableItemStyles } from './types';
export default function ({ position, mode, fillSpace }: ITableItemStyles): {
    width: string;
    textAlign: import("./types").TableItemPosition;
    py: string;
    px: string;
    ':first-of-type': {
        pl: string;
    };
    ':last-of-type': {
        pr: string;
    };
};
