import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const inter = Montserrat({ subsets: ["latin"] });
import { UserProvider } from "./Context/store";

export const metadata = {
  title: "ASWO, Excellence in After-Sales Services",
  description:
    "ASWO provides you with a service concept for your everyday repair needs. Know more · Manufacturers. ASWO provides ...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://www.aswo.com/typo3conf/ext/aswo/Resources/Public/Images/favicon.ico"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <div className="wraper">
          <Header />
          <UserProvider>
            <section>{children}</section>
          </UserProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
