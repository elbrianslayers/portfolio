import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Brian Portfolio",
  description: "Software Engineering Portfolio",
};

const navOptions = [
  { label: "Home", path: "/portfolio/" },
  { label: "About", path: "/portfolio/about" },
  { label: "Projects", path: "/portfolio/projects" },
  { label: "Uses", path: "/portfolio/uses" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${roboto.className} bg-zinc-50 dark:bg-zinc-900 min-h-screen text-zinc-900 dark:text-zinc-50 flex flex-col`}
      >
        <header className="flex justify-center pt-6">
          <Navbar options={navOptions} />
        </header>

        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
