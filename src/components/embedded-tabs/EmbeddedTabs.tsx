import React, { useState } from 'react';
import { Box, BoxProps } from 'rebass';
import * as S from './styles';
import Tab, { Props as EmbeddedTabItem } from './Tab';

export interface Props extends Omit<BoxProps, 'css'> {
  tabs: EmbeddedTabItem[];
  initialTab?: number;
  onTabChange?: (tabIndex: number) => void;
}

const EmbeddedTabs = ({ onTabChange, initialTab = 0, ...restProps }: Props) => {
  const [activeIndex, setActiveIndex] = useState(initialTab);

  const handleTabClick = (newIndex: number) => {
    setActiveIndex(newIndex);

    if (onTabChange) {
      onTabChange(newIndex);
    }
  };

  return (
    <Controlled
      activeTab={activeIndex}
      onTabChange={handleTabClick}
      {...restProps}
    />
  );
};

export default EmbeddedTabs;

export interface ControlledProps extends Omit<Props, 'initialTab'> {
  activeTab: number;
}

export const Controlled = ({
  tabs,
  onTabChange,
  sx = {},
  activeTab,
  ...boxProps
}: ControlledProps) => {
  const handleTabClick = (newIndex: number) => {
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
          active={index === activeTab}
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
