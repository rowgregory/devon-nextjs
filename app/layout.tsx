import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageWrapper from "./page-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Devon Hunt - Realtor ®`,
  description: "Massachusetts Realtor",
  metadataBase: new URL('https://www.devonhuntrealtor.com/'),
  openGraph: {
    type: 'website',
    url: 'https://www.devonhuntrealtor.com/',
    title: 'Devon Hunt - Realtor ®',
    description: 'Massachusetts Realtor',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Fdevon-rich-preview.png?alt=media&token=0c1ec1c7-f7db-4024-9156-dc5848fedfa1',
        width: 1200,
        height: 630,
        alt: 'Devon Hunt - Realtor ®',
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
      <body className={inter.className}>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
