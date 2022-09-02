import type { LinkProps } from 'next/link';
import NextLink from 'next/link';
import type { FC, HTMLProps } from 'react';

const CustomLink: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
  as,
  children,
  href,
  replace,
  scroll = false,
  shallow,
  passHref,
  prefetch,
  ...rest
}) => (
  <NextLink
    as={as}
    href={href}
    passHref={passHref}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    prefetch={prefetch}
  >
    <a {...rest}>{children}</a>
  </NextLink>
);

export default CustomLink;
