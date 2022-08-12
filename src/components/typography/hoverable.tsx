import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Text, TextProps, LinkProps, Link as RebassLink } from 'rebass';

export interface HoverableTextProps extends Omit<TextProps, 'css'> {}
export interface HoverableLinkProps extends Omit<LinkProps, 'css'> {}

const styles = {
  cursor: 'pointer',
  ':hover': {
    color: 'primary',
  },
  transition: 'all .4s',
};

export const HoverableText: FC<HoverableTextProps> = (
  props: HoverableTextProps,
) => {
  let { sx } = { ...props };
  sx = { ...sx, ...styles };
  return <Text {...props} variant="title" sx={sx} />;
};

export const HoverableLink: FC<HoverableLinkProps> = ({
  href,
  target,
  ...props
}: HoverableLinkProps) => {
  let { sx } = { ...props };
  sx = { ...sx, ...styles };

  return (
    <RebassLink
      as={Link}
      {...props}
      // @ts-ignore
      to={href}
      variant="title"
      sx={sx}
      target={target}
      {...(target === '_blank' ? { rel: 'noopener noreferrer' } : {})}
    />
  );
};
