declare const styles: (isOpen: boolean) => {
    display: string;
    flexDirection: string;
    alignItems: string;
    justifyContent: string;
    borderRightStyle: string;
    borderRightWidth: string;
    position: string;
    overflowX: string;
    width: string;
    minWidth: string;
    height: string;
    '> ul': {
        width: string;
        height: string;
        display: string;
        flexDirection: string;
        flex: number;
        m: number;
        p: number;
        '>li>div': {
            display: string;
            overflow: string | false;
            flexDirection: string;
            alignItems: string;
            padding: string;
            height: string;
            background: string;
            color: string;
            borderColor: string;
            borderStyle: string;
            borderWidth: string;
            borderRightWidth: string;
            borderLeftWidth: string;
            cursor: string;
            paddingLeft: string;
            ':hover': {
                color: string;
            };
        };
        '>li:first-of-type>div': {
            height: string;
            padding: string;
            borderWidth: string;
        };
    };
    '> div': {
        width: string;
        fontSize: string;
        fontFamily: string;
        pb: string;
        '>*': {
            textAlign: string;
        };
    };
};
export default styles;
