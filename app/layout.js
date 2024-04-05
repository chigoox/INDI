import { Jost } from "next/font/google";
import "./globals.css";

const inter = Jost({ weight: ['400'], subsets: ["latin"] });

export const metadata = {
  title: "IndIMassage",
  description: "Luxury Massage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>


        {children}


      </body>
    </html>
  );
}
