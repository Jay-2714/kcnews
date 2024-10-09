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
      <body className="bg-gray-100 ">
        <header className="text-red-600 bg-white p-4 shadow-red-600 shadow-sm w-full ">
          <h5 className="text-sm font-bold text-center" translate="no">
            मराठी जनतेचे
          </h5>
          <h1
            className="sm:text-9xl font-bold text-center text-xl shadow-black "
            style={{
              textShadow:
                "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            }}
            translate="no"
          >
            कलियुग चक्र
          </h1>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-red-700 text-white p-4 text-center">
          <p translate="no">© 2023 मराठी जनतेचे कलियुग चक्र. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
