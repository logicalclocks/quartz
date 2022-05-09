import * as R from 'ramda';
import React, { FC } from 'react';
import { Box, SxStyleProp } from 'rebass';
import Label from '../label';
import * as S from './styles';

export interface Props {
  title: string;
  active?: boolean;
  onClick?: () => any;
  disabled?: boolean;
}

const getStyles = ({ active, disabled }: any): SxStyleProp => {
  return {
    ...S.tab,
    ...(active && S.activeTab),
    ...(disabled && S.disabledTab),
  };
};

const Tab: FC<Props> = (props) => {
  const propagatedProps = R.pick(['disabled', 'onClick'], props);

  return (
    <Box sx={getStyles(props)} {...propagatedProps}>
      <Label pb="1px">{props.title}</Label>
    </Box>
  );
};

export default Tab;
