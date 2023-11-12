import { BarChart3, Home, Settings, ShieldHalf } from "lucide-react";
import { ElementType, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import symbol from "../assets/symbol.png";
import useMediaQuery from "../hooks/useMediaQuery";
import { close } from "../reduxTookit/sidebarContext";
import { buttonStyles } from "./Button";

interface RootState {
  sidebar: {
    isSmallOpen: boolean;
  };
}

const Sidebar = () => {
  // const location = useLocation();
  // const pathName = location.pathname;
  const { isSmallOpen } = useSelector((state: RootState) => state.sidebar);
  const dispatch = useDispatch();
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

  const handleClose = () => {
    console.log("clicked");
    dispatch(close());
  };

  useEffect(() => {
    isAboveMediumScreens && dispatch(close());
  }, [isAboveMediumScreens]);

  return (
    <>
      {/* small screen */}
      <aside
        className={`fixed w-2/6 z-[9999] md:hidden top-0 bg-primary-50 h-screen text-gray-800 left-0 overflow-y-auto 
      scrollbar-hidden pb-4 px-2 flex-col items-center ${
        isSmallOpen ? "flex" : "hidden"
      }`}
      >
        <Link to="/" className="items-center justify-center flex py-3 pb-4">
          <img src={symbol} alt="youtube-symbol" className="h-10" />
          <p className="text-lg font-bold">EnPals</p>
        </Link>
        <SmallSidebarItem Icon={Home} title="Dashboard" url="/" />
        <SmallSidebarItem Icon={BarChart3} title="Reports" url="/report" />
        <SmallSidebarItem Icon={ShieldHalf} title="Rankings" url="/ranking" />
        <SmallSidebarItem Icon={Settings} title="Settings" url="/settings" />
      </aside>
      {isSmallOpen && (
        <div
          onClick={handleClose}
          className="md:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50"
        />
      )}

      {/* large */}
      <aside
        className={`w-56 md:sticky md:flex hidden top-0 overflow-y-auto 
        scrollbar-hidden pb-4 flex-col gap-2`}
      >
        <LargeSidebarItem Icon={Home} title="Home" url="/" />
        <LargeSidebarItem Icon={BarChart3} title="Reports" url="/report" />
        <LargeSidebarItem Icon={ShieldHalf} title="Rankings" url="/ranking" />
        <LargeSidebarItem Icon={Settings} title="Settings" url="/settings" />
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
  const { pathname } = useLocation();
  return (
    <Link
      to={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `my-2 px-1 w-full flex flex-col items-center rounded-lg gap-1 ${
          pathname.toLowerCase() === url.toLowerCase() &&
          "font-bold bg-primary-100"
        }`
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </Link>
  );
}

type LargeSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

function LargeSidebarItem({ Icon, title, url }: LargeSidebarItemProps) {
  const { pathname } = useLocation();

  return (
    <Link
      to={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3 hover:bg-primary ${
          pathname.toLowerCase() === url.toLowerCase() &&
          "font-bold bg-primary-100"
        } `
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </Link>
  );
}

export default Sidebar;
