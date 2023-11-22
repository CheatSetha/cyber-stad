import { Darker_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NavbarTop from "@/components/NavbarTop";

const inter = Inter({ subsets: ["latin"] });

const darker_groteque = Darker_Grotesque({
  subsets: ["latin"],
});

export const metadata = {
  title: "Cyber-STAD",
  description:
    "Cyber-STAD is a cybersecurity group of student who study at CSTAD. This website is created in order to share what we have learned and what we have done. We also want to share our vision and mission to the world. We hope that we can help people to learn more about cybersecurity and help them to protect themselves from cybercrime. and everyonw can contact us for hire us to do some project.",
  // metadata for social media
  openGraph: {
    images:  "/images/metadata.jpg",
    title: "Cyber-STAD",
    description:
      "Cyber-STAD is a cybersecurity group of student who study at CSTAD. This website is created in order to share what we have learned and what we have done. We also want to share our vision and mission to the world. We hope that we can help people to learn more about cybersecurity and help them to protect themselves from cybercrime. and everyonw can contact us for hire us to do some project.",
    type: "website",
 
    url: "https://cyber-stad.vercel.app",
  },
  twitter: {
    cardType: "summary_large_image",
    handle: "@SoPheng88402351",
    site: "@SoPheng88402351",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={darker_groteque.className}>
        <NavbarTop />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
