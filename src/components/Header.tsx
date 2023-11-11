import { Menu, User, Search, ArrowLeft } from "lucide-react";
import symbol from "../assets/symbol.png";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { toggle } from "../reduxTookit/sidebarContext";
import { useDispatch } from "react-redux";

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    isAboveMediumScreens && setShowSearchBar(false);
    console.log("checked");
  }, [isAboveMediumScreens]);

  return (
    <div className="flex items-center justify-between gap-10 lg:gap-20 pt-2 mb-6 mx-4">
      <PageHeaderFirstSection hidden={showSearchBar} />
      <form
        className={`gap-4 flex-grow justify-center ${
          showSearchBar ? "flex" : "hidden md:flex"
        }`}
      >
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className={`flex-shrink-0 ${!showSearchBar && "hidden"}`}
          onClick={() => setShowSearchBar(false)}
        >
          <ArrowLeft />
        </Button>

        <div className="flex flex-grow max-w-[600px] ">
          <input
            type="search"
            placeholder="Search"
            className="w-full outline-none rounded-full
            border border-gray-200 shadow-inner shadow-gray-100
            py-1 px-4 text-sm md:text-base focus:border-primary"
          />
        </div>
      </form>

      <div
        className={`md:gap-2 whitespace-nowrap flex-shrink-0 ${
          showSearchBar ? "hidden" : "flex"
        }`}
      >
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setShowSearchBar(true)}
        >
          <Search />
        </Button>
        <Button size="icon">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default Header;

type PageHeaderFirstSectionProps = {
  hidden?: boolean;
};

export function PageHeaderFirstSection({
  hidden = false,
}: PageHeaderFirstSectionProps) {
  const dispatch = useDispatch();
  return (
    <div
      className={`items-center gap-4 flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      } `}
    >
      <Button
        onClick={() => dispatch(toggle())}
        variant="ghost"
        size="icon"
        className="md:hidden"
      >
        <Menu />
      </Button>
      <a href="/" className="items-center justify-center hidden md:flex">
        <img src={symbol} alt="youtube-symbol" className="h-10" />
        <p className="text-lg font-bold">EnPals</p>
      </a>
    </div>
  );
}
