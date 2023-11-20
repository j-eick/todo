import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo",
  description: "Your 2nd brain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative w-full 
        xs:h-[80dvh]
      `}
      >
        <div
          className="absolute -z-10 bg-cyan-400 
          w-[40rem] h-[40rem] rounded-full top-[-5rem] right-[0rem]
          blur-[22rem]
          xs:w-[17rem] xs:h-[30rem] xs:blur-[7rem]
          xd:w-[30rem] xd:h-[35rem] xd:blur-[10rem]
          sm:w-[30rem] sm:h-[35rem] sm:blur-[10rem]"
        ></div>
        <div
          className="absolute -z-15 bg-sky-900 
          w-[40rem] h-[40rem] rounded-full bottom-[-7rem] blur-[20rem]
          xs:w-[20rem] xs:h-[40rem] xs:blur-[10rem]
          xd:w-[30rem] xd:h-[25rem] xd:blur-[10rem] xd:left-[-5rem] 
          sm:w-[40rem] sm:h-[30rem] sm:blur-[13rem]
          "
        ></div>
        {children}
        <footer className="w-full fixed bottom-0 flex justify-end bg-slate-400">
          <div
            className="p-5 
          xs:p-3 xs:text-xs_smaller"
          >
            (c) 2023
          </div>
        </footer>
      </body>
    </html>
  );
}
