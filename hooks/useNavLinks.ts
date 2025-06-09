import { INavLink } from "@/types/nav.types";

export const useNavLinks = (): INavLink[] => {
  const links: INavLink[] = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
  ];

  return links;
};
