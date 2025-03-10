import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"]
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Portfolio - SM",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${spaceGrotesk.className} antialiased leading-8
        overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
