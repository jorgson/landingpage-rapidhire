import Nav from "@/components/header/nav";
import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Head from "next/head";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atelier Rapid Hire",
  description: "By Atelier & Friends GmbH",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta
          name="msapplication-TileColor"
          content="#da532c"
        />
        <meta
          name="theme-color"
          content="#ffffff"
        />
      </Head>
      <body
        className={`${firaCode.className} scroll-smooth px-2 mx-4 bg-black text-white`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
