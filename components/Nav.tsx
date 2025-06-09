"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { useNavLinks } from "@/hooks/useNavLinks";
import { INavLink } from "@/types/nav.types";
import Link from "next/link";

const Nav: FC = () => {
  const pathname: string = usePathname();
  const links: INavLink[] = useNavLinks();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
