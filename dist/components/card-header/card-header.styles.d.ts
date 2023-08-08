import { ITheme } from '../../theme/types';
declare const _default: (withShadow: boolean, withBorderBottom: boolean) => {
    display: string;
    flexDirection: string;
    alignItems: string;
    justifyContent: string;
    height: string;
    minHeight: string;
    width: string;
    px: string;
    boxSizing: string;
    borderBottomWidth: string;
    borderBottomStyle: string;
    borderBottomColor: ({ variants }: ITheme) => any;
    boxShadow: string;
    '> h4': {
        fontFamily: string;
        fontWeight: string;
        fontSize: string;
    };
    '> div': {
        ml: string;
    };
};
export default _default;
