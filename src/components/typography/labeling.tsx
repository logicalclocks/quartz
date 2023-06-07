import { FC } from 'react';
import { Text, TextProps } from 'rebass';

export interface LabelingProps extends Omit<TextProps, 'css'> {
  bold?: boolean;
  gray?: boolean;
}

const Labeling: FC<LabelingProps> = ({
  children,
  bold,
  gray,
  sx,
  ...props
}: LabelingProps) => (
  <Text
    variant={`labeling${gray ? 'Gray' : ''}`}
    fontWeight={bold ? 'label' : undefined}
    sx={{ wordWrap: 'normal', ...sx }}
    {...props}
  >
    {children}
  </Text>
);

export default Labeling;
