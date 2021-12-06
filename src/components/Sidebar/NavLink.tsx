import { Link as ChakraLink, Text, Icon, LinkProps } from '@chakra-ui/react';

import ActiveLink from 'components/ActiveLink';

export type NavLinkProps = {
  title: string;
  href: string;
  icon: React.ElementType;
} & LinkProps;

export default function NavLink({ title, href, icon, ...rest }) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {title}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
