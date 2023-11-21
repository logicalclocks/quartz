export interface Props {
    title: string;
    active?: boolean;
    onClick?: () => any;
    disabled?: boolean;
}
declare const Tab: ({ title, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default Tab;
