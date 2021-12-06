import { Button } from '@chakra-ui/react';

type PaginationItemProps = {
  number: number;
  isCurrent?: boolean;
};

export default function PaginationItem({
  number,
  isCurrent = false
}: PaginationItemProps) {
  if (isCurrent)
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{ bg: 'pink.500', cursor: 'default' }}
      >
        {number}
      </Button>
    );
  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{ bg: 'gray.500' }}
    >
      {number}
    </Button>
  );
}
