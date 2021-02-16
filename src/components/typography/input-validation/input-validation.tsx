import React, { FC } from 'react';
import { Flex, Text, TextProps } from 'rebass';
import { getIcon } from './utils';

export interface InputValidationProps extends Omit<TextProps, 'css'> {
  intent?: 'success' | 'fail' | 'warning' | 'neutral';
}

const InputValidation: FC<InputValidationProps> = ({
  intent = 'neutral',
  ...props
}: InputValidationProps) => {
  const icon = getIcon(intent);

  return (
    <Flex alignItems="center">
      {icon}
      <Text
        pl="10px"
        fontSize="12px"
        fontFamily="Inter"
        fontWeight={700}
        {...props}
        variant={`inputValidation${intent}`}
      />
    </Flex>
  );
};

export default InputValidation;
