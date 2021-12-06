import { Link, Text, Icon, LinkProps } from '@chakra-ui/react';

export type NavLinkProps = {
  title: string;
  icon: React.ElementType;
} & LinkProps;

export default function NavLink({ title, icon, ...rest }) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {title}
      </Text>
    </Link>
  );
}
