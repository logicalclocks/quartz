/// <reference types="react" />
import { LabelProps } from '../../label';
import { FlexProps } from '../../flex';
export declare const defaultGraphColors: string[];
export declare const defaultBorderColor = "black";
export interface SplitGraphValue {
    label?: string;
    value: number;
    isGap?: boolean;
    trainSplit?: boolean;
    renderCustomComponent?: (props: {
        selected?: boolean;
        color: string;
    }) => JSX.Element;
}
type LabelDirection = 'column' | 'row';
type AlignGraphAndLabel = 'center' | undefined;
export interface SplitGraphProps extends Omit<FlexProps, 'children'> {
    values: SplitGraphValue[];
    /** wether to show percentage or not */
    withoutPercentage?: boolean;
    labelProps?: Omit<LabelProps, 'children'>;
    hideTrainSplitOnhover?: boolean;
    /** to render aditional component as actions */
    renderActions?: () => JSX.Element;
    graphColors?: string[];
    borderColors?: string[];
    labelDirection?: LabelDirection;
    widthLabelFlex?: string;
    alignGraphAndLabel?: AlignGraphAndLabel;
}
declare const SplitGraph: ({ values, withoutPercentage, labelProps, hideTrainSplitOnhover, renderActions, graphColors, borderColors, labelDirection, widthLabelFlex, alignGraphAndLabel, ...props }: SplitGraphProps) => import("react/jsx-runtime").JSX.Element;
export default SplitGraph;
