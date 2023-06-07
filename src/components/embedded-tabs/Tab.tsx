import * as R from 'ramda';
import { FC } from 'react';
import { Box, SxStyleProp } from 'rebass';
import Label from '../label';
import * as S from './styles';

export interface Props {
  title: string;
  active?: boolean;
  onClick?: () => any;
  disabled?: boolean;
}

const getStyles = ({ active, disabled }: Pick<Props, 'active' | 'disabled'>) =>
  ({
    ...S.tab,
    ...(active ? S.activeTab : {}),
    ...(disabled ? S.disabledTab : {}),
  } as SxStyleProp);

const Tab: FC<Props> = ({ title, ...props }) => {
  const propagatedProps = R.pick(['disabled', 'onClick'], props);

  return (
    <Box sx={getStyles(props)} {...propagatedProps}>
      <Label pb="1px">{title}</Label>
    </Box>
  );
};

export default Tab;
