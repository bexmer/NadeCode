import "./globals.css";
import { Kanit } from "next/font/google";
import Navbar from "../components/Navbar";

const aqsqa = Kanit({
  weight: ["400"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "NadeCode",
  description: "Descubre la IA que necesitas y ayuda a la comunidad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={aqsqa.className}>
        <div className="flex basis-9/12 navPro">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
