
import {Navbar,Banner} from "./components";
import Main from "./components/layout/Main";

export default function Home() {
  return (
    <div className="w-full bg-contextBG dark:bg-contextDarkBG pb-80 ">
      <Navbar/>
      <Banner/>
      <Main/>
    </div>
  );
}
