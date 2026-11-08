import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config";
export const metadata: Metadata = { title: `${siteConfig.domain} — A name for better health, online`, description: `Acquire ${siteConfig.domain}, a memorable domain with potential for digital health, care platforms, and connected wellness. Price negotiable by email.`, openGraph: { title: `${siteConfig.domain} | Digital health starts with a name`, description: "A clear, memorable home for the next idea in digital care. Available for acquisition.", type: "website" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
