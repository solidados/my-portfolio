import { ISocLink } from "@/types/nav.types";

import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";

export const useSocLink = (): ISocLink[] => {
  return [
    { icon: FaGithub, path: "https://github.com/solidados" },
    { icon: FaLinkedinIn, path: "https://www.linkedin.com/in/solidados/" },
    { icon: FaFacebook, path: "https://facebook.com/solidados" },
  ];
};
