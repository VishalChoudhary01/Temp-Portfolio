import { RxHamburgerMenu } from "react-icons/rx";
const LoadingNavbar = ({logo}) => (
  <nav className="fixed z-[999] w-full h-16 flex items-center justify-between px-1.5 py-1.5 md:py-8 md:px-2 bg-navbarBG dark:bg-navbarDarkBG text-neutral-950 dark:text-neutral-50">
    <logo />
    <div className="md:hidden">
      <button className="text-2xl p-2">
        <RxHamburgerMenu />
      </button>
    </div>
  </nav>
);

export default LoadingNavbar