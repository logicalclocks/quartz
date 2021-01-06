import React, { FC, memo, useRef, useMemo, useState, useEffect } from 'react';
import { Box, BoxProps, Flex } from 'rebass';

// Styles
import styles, {
  tabStyles,
  underlineStyles,
  activeUnderlineTabStyles,
} from './alternative-header.styles';
// Utils
import { getUnderlineLeftPosition, getUnderlineWidth } from './utils';
// Components
import { Value } from '../../index';

export interface Tab {
  title: string;
  isActive: boolean;
  onCLick: () => void;
}

export interface AlternativeHeaderProps extends Omit<BoxProps, 'css'> {
  title?: string;
  rightTopContent?: React.ReactElement;
  rightBottomContent?: React.ReactElement;
  tabs: Tab[];
}

const AlternativeHeader: FC<AlternativeHeaderProps> = ({
  rightBottomContent,
  rightTopContent,
  title,
  tabs,
  ...props
}: AlternativeHeaderProps) => {
  const tabRefs = useRef<HTMLDivElement[]>([]);

  const activeTabIndex = useMemo(() => {
    const index = tabs.findIndex(({ isActive }) => isActive);

    return index > -1 ? index : 0;
  }, [tabs]);

  const [{ left, width }, setStyles] = useState(() => ({
    left: getUnderlineLeftPosition(tabRefs.current, activeTabIndex),
    width: getUnderlineWidth(tabRefs.current, activeTabIndex),
  }));

  useEffect(() => {
    setStyles({
      left: getUnderlineLeftPosition(tabRefs.current, activeTabIndex),
      width: getUnderlineWidth(tabRefs.current, activeTabIndex),
    });
  }, [activeTabIndex]);

  return (
    <Flex sx={styles} {...props}>
      <Flex justifyContent="space-between" width="100%" height="fit-content">
        <Value fontSize="20px" fontFamily="Inter" fontWeight="bold">
          {title && title}
        </Value>
        {rightTopContent && rightTopContent}
      </Flex>

      <Flex mt="25px" justifyContent="space-between" width="100%">
        <Flex>
          {tabs.map((tab, index) => (
            <Box
              ref={(ref) => {
                tabRefs.current[index] = ref;
              }}
              onClick={tab.onCLick}
              key={tab.title}
              sx={tabStyles}
            >
              <Value fontFamily="Inter">{tab.title}</Value>
              <Box sx={underlineStyles()} />
            </Box>
          ))}
          <Box sx={activeUnderlineTabStyles(width, left)} />
        </Flex>

        <Flex>{rightBottomContent && rightBottomContent}</Flex>
      </Flex>
    </Flex>
  );
};

export default memo(AlternativeHeader);
