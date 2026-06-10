import { FC } from "react";
import Link from "next/link";
import { SOCIALS, type ISocialItem } from '@/data/socials.data';

type TSocialsProps = {
  containerStyles?: string;
  iconStyles?: string;
};

const Socials: FC<TSocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {SOCIALS.map((item: ISocialItem) => {
        return (
          <Link
            key={item.id}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
