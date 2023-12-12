import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "WordWonders - Ingiliz tili so'zlarini osonlik bilan eslab qoling.",
  description:
    "WordWonders - Biz bilan ingiliz tili so'zlarni osonlik bilan eslab qoling.",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="pt-20 bg-background">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
