"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  link: {
    href: string;
    label: string;
  };
};

export const NavLink = ({ link }: Props) => {
  const { href, label } = link;

  const pathname = usePathname();

  const isActive =
    pathname === href || (pathname.startsWith(href) && href !== "/");

  return (
    <Link
      href={href}
      className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
    >
      {label}
    </Link>
  );
};
