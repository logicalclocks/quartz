import React from 'react';
import { Flex } from 'rebass';

const Container: React.FC = ({ children }) => (
  <Flex
    style={{
      position: 'relative',
      height: '8px',
    }}
  >
    {children}
  </Flex>
);

export default Container;
