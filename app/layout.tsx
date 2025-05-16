import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TonConnectProvider } from "./context/TonConnectContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "mgilangnurhlz",
  description: "my personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TonConnectProvider>{children}</TonConnectProvider>
      </body>
    </html>
  );
}
