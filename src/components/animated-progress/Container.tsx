import React from 'react';
import { Flex } from 'rebass';

const Container: React.FC = ({ children }) => (
  <Flex
    sx={{
      position: 'relative',
      height: '8px',
      width: '100%',
    }}
  >
    {children}
  </Flex>
);

export default Container;
