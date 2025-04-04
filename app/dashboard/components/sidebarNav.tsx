"use client";

import {
  ChatBubbleLeftEllipsisIcon,
  CogIcon,
  FolderMinusIcon,
  HomeIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const listItem = [
  { name: "Overview", href: "/dashboard", icon: HomeIcon },
  { name: "Course", href: "/course", icon: Squares2X2Icon },
  { name: "Resources", href: "/resources", icon: FolderMinusIcon },
  { name: "Message", href: "/message", icon: ChatBubbleLeftEllipsisIcon },
  { name: "Setting", href: "/setting", icon: CogIcon },
];

const SidebarNav = () => {
  const pathname = usePathname();

  return (
    <>
      {listItem.map((item) => {
        const LinkIcon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={clsx(
              "flex w-full h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 mt-5 mr-2 md:mr-0",
              {
                "bg-sky-100 text-blue-600": pathname === item.href,
              }
            )}
          >
            <LinkIcon className="w-6 h-6 text-gray-400" />
            <p className="hidden md:block text-sm text-gray-400 pl-[25px]">
              {item.name}
            </p>
          </Link>
        );
      })}
    </>
  );
};

export default SidebarNav;
