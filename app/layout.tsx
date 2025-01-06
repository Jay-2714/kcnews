import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "मराठी जनतेचे कलियुग चक्र",
  description: "मराठी जनतेचे कलियुग चक्र - ताज्या बातम्या आणि व्हिडिओ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mr">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
<link href="https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&family=Laila:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9213969545809441"
     crossOrigin="anonymous"></script></head>
      <body className="bg-gray-100 w-full overflow-x-hidden">
        <header className="bg-gradient-to-t from-red-800 to-red-600 p-4 shadow-red-600 shadow-sm w-full " translate="no"> 
          <h5 className="relative text-lg font-Khand font-bold md:text-3xl top-2  text-center text-white" translate="no">
            मराठी जनतेचे
          </h5>
          <h1
 className="text-6xl md:text-9xl font-bold font-Khand text-center text-yellow-300 pb-4 shadow-yellow"
 style={{
  textShadow:
    "-2px 0px 2px yellow, 1px 0px 2px transparent",
}}

            translate="no"
          >
            कलियुग चक्र
          </h1>
          
        </header>
        <Navbar/>
        <main className=" w-full p-1  max-w-screen overflow-x-hidden">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
