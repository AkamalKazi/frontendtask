import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/UI/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Task",
  description: "Frontend Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
