import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageWrapper from "./page-wrapper";
import { Suspense } from "react";
import Spinner from "./components/Spinner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Devon Hunt - Realtor ®`,
  description: "Massachusetts Realtor",
  metadataBase: new URL("https://www.devonhuntrealtor.com/"),
  openGraph: {
    type: "website",
    url: "https://www.devonhuntrealtor.com/",
    title: "Devon Hunt - Realtor ®",
    description: "Massachusetts Realtor",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Fdevon-rich-preview-2.png?alt=media&token=0d35d862-bf52-4af0-81d4-835314c1c5db",
        width: 1200,
        height: 630,
        alt: "Devon Hunt - Realtor ®",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="fb:app_id" content="583844026116727" />
      </head>
      <body className={inter.className}>
        <Suspense
          fallback={
            <div className="min-h-screen w-full flex justify-center pt-36">
              <Spinner fill="fill-[#42a9b3]" wAndH="w-10 h-10" />
            </div>
          }
        >
          <PageWrapper>{children}</PageWrapper>
        </Suspense>
      </body>
    </html>
  );
}
