import type { Metadata } from "next";
import "./globals.css";
import "./jade.css";
import Header from '@/components/client/Header';
// import MainNav from '@/components/client/MainNav';
// import { ClientContext } from '@/components/client/ClientContext'
import { MathJaxContext } from "better-react-mathjax";

export const metadata: Metadata = {
  title: "Launchpad JADE",
  description: "Launchpad JADE",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en" className="jade-v2">

      <body>


        <Header />

        {children}


      </body>
    </html>
  );
}

