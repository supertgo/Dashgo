import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

type ProfileProps = {
  showProfileData?: boolean;
};

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Rogerio</Text>

          <Text color="gray.300" fontSize="small">
            rogeriotobias@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Rogerio Tobias"
        src="https://github.com/supertgo/"
      />
    </Flex>
  );
}
