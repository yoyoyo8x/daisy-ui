import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider/ReduxProvider";
import dynamic from "next/dynamic";
// const Header = dynamic(() => import("@/components/Header/Header"), {
//   ssr: false,
// });
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "For Fun",
  description: "Make for fun, that for sure",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
