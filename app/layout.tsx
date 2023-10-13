import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "../components/ModalProvider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "AI Content Generator",
  description: "AI Content Generator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={poppins.className}>
          <ModalProvider />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
