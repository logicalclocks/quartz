import React from 'react';
import { Options } from '@tanem/react-nprogress/dist/types';
export interface Props extends Options {
    variant?: 'perf.black' | 'perf.green' | 'perf.orange';
}
/**
 * @param animationDuration - Optional Number indicating the animation duration in ms. Defaults to 200.
 * @param incrementDuration - Optional Number indicating the length of time between progress bar increments in ms. Defaults to 800.
 * @param isAnimating - Optional Boolean indicating if the progress bar is animating. Defaults to false.
 * @param minimum - Optional Number between 0 and 1 indicating the minimum value of the progress bar. Defaults to 0.08.
 * @param variant - Optional string indicating the color of progressing bar. Defaults to 'perf.green'
 */
export declare const AnimatedProgress: ({ variant, animationDuration, incrementDuration, isAnimating, minimum, }: Props) => React.JSX.Element;
