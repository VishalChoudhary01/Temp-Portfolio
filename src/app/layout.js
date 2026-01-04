import "./globals.css";
import ClientProvider from "./redux/clientProvider";
import FaviconSwitcher from "./components/FaviconSwitcher";
import { Footer } from "./components";
import {
  Poppins,
  Roboto,
  Merriweather,
  Michroma,
  Cormorant,
  Open_Sans,
  Outfit,
  Playfair_Display,
  Manrope,
  Lora,
} from "next/font/google";

export const metadata = {
  title: "Vishal Kumar Choudhary | Frontend Developer",
  description:
    "Portfolio of Vishal Kumar Choudhary, a passionate Frontend Developer specializing in creating dynamic and responsive web applications.",
  keywords:
    "Vishal Kumar Choudhary, Frontend Developer, Banaras Hindu University, MCA, Master of Computer Applications, Portfolio, Web Development, React, JavaScript, CSS, HTML, Tailwind CSS, Next.js, Web Design, UI/UX, Responsive Design, Frontend Engineer, Software Developer, Web Applications, Framer Motion, Animation, Web Portfolio, Personal Website, Developer Portfolio, Tech Portfolio, Frontend Projects, Open Source Contributions, GitHub Portfolio",
};

// Initialize ALL fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${cormorant.variable}
          ${manrope.variable}
          ${merriweather.variable}
          ${michroma.variable}
          ${openSans.variable}
          ${outfit.variable}
          ${playfairDisplay.variable}
          ${poppins.variable}
          ${roboto.variable}
          ${lora.variable}
          font-sans
          antialiased
        `}
      >
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
        >
          Skip to main content
        </a>
        <ClientProvider>
          <FaviconSwitcher />
          <main id="main-content">{children}</main>
        </ClientProvider>
        <Footer />
      </body>
    </html>
  );
}
