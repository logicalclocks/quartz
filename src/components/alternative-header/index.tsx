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
  altContent?: React.ReactElement;
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
    setTimeout(() => {
      setStyles({
        left: getUnderlineLeftPosition(tabRefs.current, activeTabIndex),
        width: getUnderlineWidth(tabRefs.current, activeTabIndex),
      });
    }, 150);
  }, []);

  useEffect(() => {
    setStyles({
      left: getUnderlineLeftPosition(tabRefs.current, activeTabIndex),
      width: getUnderlineWidth(tabRefs.current, activeTabIndex),
    });
  }, [activeTabIndex, tabs]);

  return (
    <Flex sx={styles(!!title || !!rightTopContent)} {...props}>
      <Flex justifyContent="space-between" width="100%" height="fit-content">
        <Value fontSize="20px" fontFamily="Inter" fontWeight="bold">
          {title && title}
        </Value>
        {rightTopContent && rightTopContent}
      </Flex>

      <Flex
        mt="25px"
        justifyContent="space-between"
        width="100%"
        sx={{ position: 'relative' }}
      >
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
              <Flex alignItems="baseline" pb="10px">
                <Value fontFamily="Inter">{tab.title}</Value>
                {tab.altContent && (
                  <Flex ml="10px">
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      px="4px"
                      py="2px"
                      {...props}
                      sx={{ borderRadius: '1px' }}
                      as="span"
                      variant="light"
                      tx="variants.badges.primary"
                    >
                      {tab.altContent}
                    </Flex>
                  </Flex>
                )}
              </Flex>
              <Box sx={underlineStyles()} />
            </Box>
          ))}
        </Flex>
        <Box sx={activeUnderlineTabStyles(width, left)} />
        <Flex>{rightBottomContent && rightBottomContent}</Flex>
      </Flex>
    </Flex>
  );
};

export default memo(AlternativeHeader);
