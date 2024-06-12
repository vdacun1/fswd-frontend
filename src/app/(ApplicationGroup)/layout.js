import "@/styles/globals.css";

import {Inter} from "next/font/google";
import Navbar from "@/components/client/Navbar/Navbar";
import { getUser} from "@/middleware/services/UserService";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Frontend Project", description: "Generated by create next app for fullstack web development",
};

async function getData() {
  return getUser();
}

export default async function RootLayout({children}) {
  const user = await getData();
  
  return (
  <html lang="en" className="h-full bg-white">
    <body className={"h-full " + inter.className}>
      <Navbar user={user} />
      {children}
    </body>
  </html>
  );
}