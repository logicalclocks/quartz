import React, { FC, useState } from 'react';
import { Box, BoxProps } from 'rebass';
import * as S from './styles';
import Tab, { Props as EmbeddedTabItem } from './Tab';

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
  const [activeIndex, setActiveIndex] = useState(initialTab);

  const handleTabClick = (newIndex: number) => {
    setActiveIndex(newIndex);

    if (onTabChange) {
      onTabChange(newIndex);
    }
  };

  return (
    <Box sx={{ ...S.tabsList, ...sx }} {...boxProps}>
      {tabs.map(({ title, onClick: onTabClick, ...tabProps }, index) => (
        <Tab
          key={title}
          title={title}
          active={index === activeIndex}
          onClick={() => {
            if (onTabClick) {
              onTabClick();
            }

            handleTabClick(index);
          }}
          {...tabProps}
        />
      ))}
      {/* This box is needed to draw the horizontal line up to the full width, it's a stylistic decision */}
      <Box tabIndex={-1} sx={S.tabsLineEnding} />
    </Box>
  );
};

export default EmbeddedTabs;
