
import {Navbar,Banner,Footer,Main} from "./components";

export default function Home() {
  return (
    <div className="w-full bg-contextBG dark:bg-contextDarkBG  ">
      <Navbar/>
      <Banner/>
      <Main/>
      <Footer/>
    </div>
  );
}
