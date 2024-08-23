import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Button } from "../ui/button";

export interface LinkProps extends NextLinkProps {
  disabled?: boolean;
  children?: React.ReactNode;
}

const Link = (props: LinkProps) => {
  const { disabled, ...restProps } = props;

  return (
    <>
      {disabled ? (
        <Button size="sm" variant="link" disabled>
          {restProps.children}
        </Button>
      ) : (
        <Button asChild size="sm" variant="link">
          <NextLink {...restProps} />
        </Button>
      )}
    </>
  );
};

Link.displayName = "Link";
export default Link;
