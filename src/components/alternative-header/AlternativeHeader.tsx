import React, { useMemo } from 'react';
import { Box, BoxProps, Flex } from 'rebass';
import Value from '../typography/value';
import * as S from './styles';
import Tooltip, { TooltipProps } from '../tooltip';

export interface Tab {
  /** Title for the tab */
  title: string;
  /** Additional content, e.g. counter */
  altContent?: React.ReactElement | null;
  /** tooltip props on tab */
  tooltipProps?: Omit<TooltipProps, 'children'>;
  /** Whether tab is active or not */
  disabled?: boolean;
  /** Whether tab is active or not */
  isActive: boolean;
  /** Handler called when tab is clicked */
  onClick: () => void;
}

export interface Props extends Omit<BoxProps, 'css'> {
  /** Title for the tabs bar */
  title?: string;
  /** A list of tabs, defined by `ALternativeHeaderTab` interface */
  tabs: Tab[];
  /** Whether to show a line under the tabs menu */
  withBase?: boolean;
}

export const AlternativeHeader = ({
  title,
  tabs,
  withBase = false,
  sx,
  ...props
}: Props) => {
  const activeTabIndex = useMemo(() => {
    const index = tabs.findIndex(({ isActive }) => isActive);

    return index < 0 ? 0 : index;
  }, [tabs]);

  return (
    <Flex sx={{ ...S.wrapper(Boolean(title)), ...sx }} {...props}>
      <Flex justifyContent="space-between" width="100%" height="fit-content">
        <Value fontSize="20px" fontFamily="Inter" fontWeight="bold">
          {title && title}
        </Value>
      </Flex>

      <Flex
        width="100%"
        mt="25px"
        justifyContent="space-between"
        sx={{ position: 'relative' }}
      >
        {withBase && <Flex sx={S.base} />}
        <Flex>
          {tabs.map((tab, index) => (
            <Box
              onClick={tab.onClick}
              key={tab.title}
              sx={S.tab(activeTabIndex === index, tab.disabled)}
            >
              <Flex alignItems="baseline" pb="10px">
                <Tooltip {...tab.tooltipProps}>
                  <Value
                    fontFamily="Inter"
                    color={tab.disabled ? 'gray' : 'black'}
                  >
                    {tab.title}
                  </Value>
                </Tooltip>
                {React.isValidElement(tab.altContent) && (
                  <Flex ml="10px">
                    <Flex
                      as="span"
                      variant="light"
                      alignItems="center"
                      tx="variants.badges.primary"
                      justifyContent="center"
                      px="4px"
                      py="2px"
                      sx={{ borderRadius: '1px' }}
                    >
                      {tab.altContent}
                    </Flex>
                  </Flex>
                )}
              </Flex>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
