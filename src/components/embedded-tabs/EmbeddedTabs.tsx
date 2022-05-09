import React, { FC, useState } from 'react';
import { Box, BoxProps } from 'rebass';
import * as S from './styles';
import Tab, { Props as EmbeddedTabItem } from './Tab';
import * as R from 'ramda';

export enum ValidateOpts {
  valid = 'valid',
  error = 'error',
  untouched = 'untouched',
}

export interface Props extends Omit<BoxProps, 'css'> {
  tabs: EmbeddedTabItem[];
  initialTab?: number;
  onTabChange?: (tabIndex: number) => void;
}

const EmbeddedTabs: FC<Props> = ({
  tabs,
  onTabChange,
  initialTab = 0,
  sx = {},
  ...boxProps
}: Props) => {
  const [active, setActive] = useState(R.clamp(0, tabs.length - 1, initialTab));

  const handleTabClick = (index: number) => {
    setActive(index);

    if (onTabChange) {
      onTabChange(index);
    }
  };

  return (
    <Box sx={{ ...S.tabsList, ...sx }} {...boxProps}>
      {tabs.map(({ title, onClick: onTabClick, ...tabProps }, index) => (
        <Tab
          key={title}
          title={title}
          active={index === active}
          onClick={() => {
            if (onTabClick) {
              onTabClick();
            }

            handleTabClick(index);
          }}
          {...tabProps}
        />
      ))}
      <Box tabIndex={-1} sx={S.tabsLineEnding}></Box>
    </Box>
  );
};

export default EmbeddedTabs;
