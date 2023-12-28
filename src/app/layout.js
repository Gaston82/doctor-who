import "./globals.css";
import Header from "./ui/components/Header/Header";
import { montserrat } from "./ui/fonts";

export const metadata = {
  title: "Doctor Who",
  description: "A Next js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
