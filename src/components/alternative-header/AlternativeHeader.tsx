import React, { FC, useMemo } from 'react';
import { Box, BoxProps, Flex } from 'rebass';
import Value from '../typography/value';
import * as S from './styles';

export interface Tab {
  title: string;
  altContent?: React.ReactElement | null;
  isActive: boolean;
  onClick: () => void;
}

export interface AlternativeHeaderProps extends Omit<BoxProps, 'css'> {
  title?: string;
  tabs: Tab[];
  withBase?: boolean;
}

export const AlternativeHeader: FC<AlternativeHeaderProps> = ({
  title,
  tabs,
  withBase,
  ...props
}: AlternativeHeaderProps) => {
  const activeTabIndex = useMemo(() => {
    const index = tabs.findIndex(({ isActive }) => isActive);

    return index < 0 ? 0 : index;
  }, [tabs]);

  return (
    <Flex sx={S.wrapper(Boolean(title))} {...props}>
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
              sx={S.tab(activeTabIndex === index)}
            >
              <Flex alignItems="baseline" pb="10px">
                <Value fontFamily="Inter">{tab.title}</Value>
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
