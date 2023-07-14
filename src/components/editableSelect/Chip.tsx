import { Tag, TagCloseButton } from '@chakra-ui/react';
import { useCallback } from 'react';
import { FlexProps, Labeling } from '../../index';

export interface ChipProps extends Omit<FlexProps, 'css'> {
  value: string;
  onDelete: (value: string) => void;
}

const Chip = ({ value, onDelete }: ChipProps) => {
  const handleDelete = useCallback(() => {
    onDelete(value);
  }, [onDelete, value]);

  return (
    <Tag borderRadius="1px" size="sm" variant="outline">
      <Labeling>{value}</Labeling>

      <TagCloseButton onClick={handleDelete} />
    </Tag>
  );
};

export default Chip;
