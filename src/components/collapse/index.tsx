import { Box, BoxProps, Flex } from 'rebass';
import React, { FC, memo, useEffect, useRef, useState } from 'react';

import { Labeling } from '../../index';
import icons from '../../sources/icons';
import styles, { contentStyles, containerStyles } from './collapse.styles';

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
  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<number>(0);
  const [isOpen, setOpen] = useState(isOpenProps);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.maxHeight = 'none';
      setHeight(ref.current.offsetHeight);
      ref.current.style.maxHeight = '0px';
    }
  }, [ref]);

  useEffect(() => {
    if (typeof openChange === 'function') {
      openChange(isOpen);
    }
  }, [openChange, isOpen]);

  useEffect(() => {
    if (isOpen !== isOpenProps) {
      setOpen(isOpenProps);
    }
  }, [isOpenProps]);

  return (
    <Box sx={containerStyles} {...props}>
      <Flex sx={styles(isOpen)} onClick={() => setOpen((state) => !state)}>
        <Flex>
          <Box>{isOpen ? icons.arrow_up : icons.arrow_down}</Box>
          {title}
        </Flex>
        {!!secondaryContent && <Labeling>{secondaryContent}</Labeling>}
      </Flex>

      <Box ref={ref} sx={contentStyles(isOpen, height)} {...contentProps}>
        {children}
      </Box>
    </Box>
  );
};

export default memo(Collapse);
