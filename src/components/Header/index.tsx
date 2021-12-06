import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react';

import Logo from './Logo';
import Profile from './Profile';
import SearchBox from './SearchBox';
import NotificationsNav from './NotificationsNav';

import { useSidebarDrawer } from 'contexts/SidebarDrawerContext';

import { RiMenuLine } from 'react-icons/ri';

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      {!isWideVersion && (
        <IconButton
          as={RiMenuLine}
          fontSize="20"
          variant="unstyled"
          onClick={onOpen}
          aria-label="Open navigation"
          mr="2"
          icon={<Icon />}
        />
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
