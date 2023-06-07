import { Flex } from 'rebass';

const Container = ({ children }: React.PropsWithChildren) => (
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
