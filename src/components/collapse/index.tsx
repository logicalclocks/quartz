import { Box, BoxProps, Flex } from 'rebass';
import React, { FC, memo, useEffect, useRef, useState } from 'react';

import { Labeling } from '../../index';
import icons from '../../sources/icons';
import styles, { contentStyles, containerStyles } from './collapse.styles';

export interface CollapseProps extends Omit<BoxProps, 'css'> {
  title: string;
  secondaryContent?: React.ReactNode;
  contentProps?: Omit<BoxProps, 'css' | 'children'>;
}

const Collapse: FC<CollapseProps> = ({
  title,
  contentProps,
  secondaryContent,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.maxHeight = 'none';
      setHeight(ref.current.offsetHeight);
      ref.current.style.maxHeight = '0px';
    }
  }, [ref]);

  return (
    <Box sx={containerStyles} {...props}>
      <Flex sx={styles(isOpen)} onClick={() => setIsOpen(!isOpen)}>
        <Flex>
          <Box>{isOpen ? icons.arrow_up : icons.arrow_down}</Box>
          <Labeling ml="8px">{title}</Labeling>
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
