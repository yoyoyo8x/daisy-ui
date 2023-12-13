import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header/Header"), {
  ssr: false,
});
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "For Fun",
  description: "Make for fun, that for sure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="nord">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
