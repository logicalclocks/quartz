import { Box, BoxProps, Flex } from 'rebass';
import { FC, memo, useEffect, useRef, useState } from 'react';

import Labeling from '../typography/labeling';
import styles, { contentStyles, containerStyles } from './collapse.styles';
import { GetIcon, IconName } from '../icon';

export interface CollapseProps extends Omit<BoxProps, 'css' | 'title'> {
  title: React.ReactNode;
  secondaryContent?: React.ReactNode;
  contentProps?: Omit<BoxProps, 'css' | 'children'>;
  isOpenProps?: boolean;
  openChange?: (value: boolean) => void;
}

const Collapse: FC<CollapseProps> = ({
  title,
  contentProps,
  secondaryContent,
  children,
  isOpenProps = false,
  openChange,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<number>(0);
  const [isOpen, setOpen] = useState(isOpenProps);

  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      containerRef.current.style.maxHeight = 'none';
      setHeight(contentRef.current.offsetHeight);
      containerRef.current.style.maxHeight = '0px';
    }
  }, [contentRef, containerRef]);

  useEffect(() => {
    if (typeof openChange === 'function') {
      openChange(isOpen);
    }
  }, [openChange, isOpen]);

  useEffect(() => {
    if (isOpen !== isOpenProps) {
      setOpen(isOpenProps);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenProps]);

  return (
    <Box sx={containerStyles} {...props}>
      <Flex sx={styles(isOpen)} onClick={() => setOpen((state) => !state)}>
        <Flex>
          <Box>
            <GetIcon
              color="primary"
              icon={isOpen ? IconName.arrow_up : IconName.arrow_down}
            />
          </Box>
          {title}
        </Flex>
        {!!secondaryContent && <Labeling>{secondaryContent}</Labeling>}
      </Flex>

      <Box
        ref={containerRef}
        sx={contentStyles(isOpen, height)}
        {...contentProps}
      >
        <Flex id="container" ref={contentRef} flexDirection="column">
          {children}
        </Flex>
      </Box>
    </Box>
  );
};

export default memo(Collapse);
