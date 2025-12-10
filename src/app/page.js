
import {Navbar,Banner} from "./components";
import NewFooter from "./components/layout/Footer/Footer";
import Main from "@/app/components/layout/Main";

export default function Home() {
  return (
    <div className="w-full bg-contextBG dark:bg-contextDarkBG  ">
      <Navbar/>
      <Banner/>
      <Main/>
      <NewFooter/>
    </div>
  );
}
