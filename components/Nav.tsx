"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from '@/context/LocaleContext';
import Link from "next/link";

import { NAV_LINKS , type INavLinkItem } from "@/data/nav.data";

const Nav: FC = () => {
  const pathname: string = usePathname();
  const { locale } = useLocale();
  
  return (
    <nav className="flex gap-8">
      {NAV_LINKS.map((link: INavLinkItem) => (
        <Link
          key={link.path}
          href={link.path}
          className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name[locale]}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
