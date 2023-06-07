import { Flex } from 'rebass';

interface Props {
  animationDuration: number;
  progress: number;
  variant: string;
}
const Bar = ({ animationDuration, progress, variant }: Props) => (
  <Flex
    variant={variant}
    sx={{
      position: 'relative',
      width: `${progress * 100}%`,
      transition: `width ${animationDuration}ms linear`,
      height: '8px',
    }}
  >
    <Flex
      variant={variant}
      sx={{
        position: 'absolute',
        width: '100%',
        height: '2px',
        top: '3px',
      }}
    />
  </Flex>
);

export default Bar;
