
import {Navbar,Banner,Main} from "./components";
import DarkModeToggle  from "@/app/components/atoms/theme-toggle/DarkModeToggle";

export default function Home() {
  return (
    <div className="w-full bg-contextBG dark:bg-contextDarkBG  ">
      <Navbar/>
      <Banner/>
      <Main/>
      <div className="md:hidden">
      <DarkModeToggle/>
      </div>
    </div>
  );
}
