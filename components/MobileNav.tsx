"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";

import { usePathname } from "next/navigation";
import { useNavLinks } from "@/hooks/useNavLinks";
import { INavLink } from "@/types/nav.types";

import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { SheetTitle } from "@/components/ui/sheet";

const MobileNav: FC = () => {
  const pathname = usePathname();
  const links: INavLink[] = useNavLinks();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle>
          <VisuallyHidden>Mobile navigation</VisuallyHidden>
        </SheetTitle>
        {/* Logo */}
        <div className="mt-28 mb-28 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Pavel<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-8 justify-center items-center round">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize text-xl hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="outline">Hire me</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
