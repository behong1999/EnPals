import { ElementType } from "react";
import {
  HomeIcon,
  ChartBarIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";
import { useSidebarContext } from "../contexts/SideBarContext";
// import { useSidebarContext } from '../contexts/SideBarContext';

const sections = [
  {
    title: "Dashboard",
    icon: HomeIcon,
    url: "/dashboard",
  },
  {
    title: "Reports",
    icon: ChartBarIcon,
    url: "/reports",
  },
  {
    title: "Payments & Redeems",
    icon: UserIcon, // Replace with the appropriate icon
    url: "/payment",
  },
  {
    title: "Settings",
    icon: Cog6ToothIcon, // Replace with the appropriate icon
    url: "/settings",
  },
];

const Sidebar = () => {
  const { isLargeOpen } = useSidebarContext();
  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto 
      scrollbar-hidden pb-4 flex-col ml-1 ${
        isLargeOpen ? "lg:hidden" : "lg:flex"
      }`}
      >
        {sections.map((section) => (
          <SmallSidebarItem
            Icon={section.icon}
            title={section.title}
            url={section.url}
          />
        ))}
      </aside>
    </>
  );
};

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center rounded-lg gap-1"
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}

export default Sidebar;