"use client";

import { FC, useState } from "react";

import { usePathname } from "next/navigation";
import { NAV_LINKS, type INavLinkItem } from '@/data/nav.data';

import Link from "next/link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Sheet, SheetContent, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { Button } from "@/components/ui/button";
import { SheetTitle } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";


const MobileNav: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const handleClose = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle>
          <VisuallyHidden>Mobile navigation</VisuallyHidden>
        </SheetTitle>
        <SheetDescription>
          <VisuallyHidden>Site navigation menu</VisuallyHidden>
        </SheetDescription>
        
        {/* Logo */}
        <div className="mt-28 mb-28 text-center text-2xl">
          <Link href="/" onClick={handleClose}>
            <h1 className="text-4xl font-semibold">
              Pavel<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-8 justify-center items-center round">
          {NAV_LINKS.map((link: INavLinkItem) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={handleClose}
              className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize text-xl hover:text-accent transition-all`}
            >
              {link.name.en}
            </Link>
          ))}
          <Link href="/contact" onClick={handleClose}>
            <Button variant="outline">Hire me</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
