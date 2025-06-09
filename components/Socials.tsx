import { ISocLink } from "@/types/nav.types";
import { FC } from "react";
import Link from "next/link";
import { useSocLink } from "@/hooks/useSocLink";

type TSocialsProps = {
  containerStyles?: string;
  iconStyles?: string;
};

const Socials: FC<TSocialsProps> = (props) => {
  const { containerStyles, iconStyles } = props;
  const socials: ISocLink[] = useSocLink();

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        const SocIcon = item.icon;
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocIcon />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
