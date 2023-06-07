import { FC, memo, CSSProperties } from 'react';
import { Button, ButtonProps, Flex, Box } from 'rebass';
import { GetIcon, IconName } from '../icon';

import styles from './styles';

type Indicator = 'vertical' | 'horizontal';
type LinkRelatedProps = Pick<Props, 'href' | 'newTab'>;

export interface Props extends Omit<ButtonProps, 'css'> {
  newTab?: boolean;
  isActive?: boolean;
  icon?: IconName;
  indicator?: Indicator;
  mode?: 'default' | 'highlight';
}

const flexDirections: Record<Indicator, CSSProperties['flexDirection']> = {
  horizontal: 'row',
  vertical: 'column-reverse',
};

const getLinkProps = ({ href, newTab }: LinkRelatedProps): Partial<Props> =>
  href
    ? {
        href,
        as: 'a',
        rel: 'noreferrer',
        target: newTab ? '_blank' : '_self',
      }
    : {};

const CompactButton: FC<Props> = ({
  icon,
  href,
  children,
  isActive,
  indicator,
  sx = {},
  newTab = false,
  mode = 'default',
  ...props
}) => (
  <Button
    {...props}
    {...getLinkProps({ newTab, href })}
    sx={{ ...styles.default, ...styles[mode], ...sx }}
  >
    <Flex
      alignItems="center"
      justifyContent="center"
      sx={styles.flex}
      flexDirection={flexDirections[indicator ?? 'horizontal']}
    >
      {!!icon && <GetIcon icon={icon} size="xs" />}
      {indicator && !icon && <span data-active={isActive} />}

      <Box>{children}</Box>
    </Flex>
  </Button>
);

export default memo(CompactButton);
