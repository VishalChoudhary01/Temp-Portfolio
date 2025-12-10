import "./globals.css";
import ClientProvider from "./redux/clientProvider";
import FaviconSwitcher from "./components/FaviconSwitcher";
import {
  Poppins,
  Roboto,
  Merriweather,
  Michroma,
  Noto_Serif,
  Work_Sans,
  Arimo,
  Rubik_Maze
} from "next/font/google";

export const metadata = {
  title: "Vishal Kumar Choudhary | Frontend Developer",
  description:
    "Portfolio of Vishal Kumar Choudhary, a passionate Frontend Developer specializing in creating dynamic and responsive web applications.",
  keywords:
    "Vishal Kumar Choudhary, Frontend Developer,Banaras Hindu University, MCA , Master of Computer Applications, Portfolio, Web Development, React, JavaScript, CSS, HTML,Tailwind CSS, Next.js, Web Design, UI/UX, Responsive Design, Frontend Engineer, Software Developer, Web Applications,Framer Motion, Animation, Web Portfolio, Personal Website, Developer Portfolio, Tech Portfolio, Frontend Projects, Open Source Contributions, GitHub Portfolio",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto",
});
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-merriweather",
});
const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
});
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-serif",
});
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-work-sans",
});
const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arimo",
});
const rubikMaze = Rubik_Maze({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rubik-maze",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.variable} ${roboto.variable} ${merriweather.variable} ${michroma.variable} ${notoSerif.variable} ${workSans.variable} ${arimo.variable} ${rubikMaze.variable}
          
          antialiased
        `}
      >
        <ClientProvider>
          <FaviconSwitcher />
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
