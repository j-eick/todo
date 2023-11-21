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
        xs:h-[70dvh]
      `}
      >
        <div
          className="absolute -z-10 bg-cyan-400 
          w-[40rem] h-[40rem] rounded-full top-[-5rem] right-[0rem]
          blur-[22rem]
          xs:w-[17rem] xs:h-[30rem] xs:blur-[7rem]
          xd:w-[30rem] xd:h-[35rem] xd:blur-[10rem]
          sm:w-[30rem] sm:h-[35rem] sm:blur-[10rem]
          md:w-[40rem] md:h-[35rem] md:blur-[12rem]
          lg:w-[50rem] lg:h-[40rem] lg:blur-[15rem]
          xl:w-[55rem] xl:h-[45rem] xl:blur-[16rem]
          xxl:w-[65rem] xxl:h-[50rem] xxl:blur-[18rem]
          "
        ></div>
        <div
          className="absolute -z-15 bg-sky-900 
          w-[40rem] h-[40rem] rounded-full bottom-[-7rem] blur-[20rem]
          xs:w-[20rem] xs:h-[25rem] xs:blur-[10rem]
          xd:w-[30rem] xd:h-[25rem] xd:blur-[10rem] xd:left-[-5rem] 
          sm:w-[40rem] sm:h-[30rem] sm:blur-[12rem]
          md:w-[45rem] md:h-[30rem] md:blur-[13rem]
          lg:w-[55rem] lg:h-[32rem] lg:blur-[15rem]
          xl:w-[55rem] xl:h-[32rem] xl:blur-[15rem]
          xxl:w-[55rem] xxl:h-[32rem] xxl:blur-[18rem]
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
