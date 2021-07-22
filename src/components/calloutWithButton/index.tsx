import React, { FC } from 'react';
import { FlexProps } from 'rebass';
import Callout, { CalloutTypes } from '../callout';
import Button from '../button';
import variants from '../../theme/callout/index';

export interface ICalloutWithButtonProps
  extends Omit<FlexProps, 'content' | 'css' | 'onClick'> {
  buttonContent?: string | JSX.Element;
  content: string;
  type: CalloutTypes;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CalloutWithButton: FC<ICalloutWithButtonProps> = ({
  buttonContent,
  content,
  onClick,
  type,
  ...props
}: ICalloutWithButtonProps) => {
  // @ts-ignore
  const main = variants[type].color;
  // @ts-ignore
  const light = variants[type].bg;

  const buttonSx = {
    color: main,
    ':hover': {
      bg: light,
    },
    ':active': {
      borderColor: light,
    },
  };

  return (
    <Callout
      type={type}
      content={content}
      cta={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <Button sx={buttonSx} variant="secondary" onClick={onClick}>
          {buttonContent}
        </Button>
      }
      {...props}
    />
  );
};

export default CalloutWithButton;
