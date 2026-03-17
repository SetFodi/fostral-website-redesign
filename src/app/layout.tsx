import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import ContentProvider from "@/components/cms/ContentProvider";
import AdminToolbar from "@/components/cms/AdminToolbar";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fostral Consulting — Fostering Your Growth",
  description: "Fostral Consulting helps manufacturing and trading companies replace fragmented tools with one integrated ERP platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} antialiased`}>
        <ContentProvider>
          {children}
          <AdminToolbar />
        </ContentProvider>
      </body>
    </html>
  );
}
