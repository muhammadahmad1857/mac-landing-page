import "./globals.css";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata = {
  title: "Three.js Practice | Mac landing page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.className} h-dvh w-screen bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}