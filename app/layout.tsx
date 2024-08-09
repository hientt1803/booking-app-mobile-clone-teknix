import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { GeniusModal } from "@/components/modal";
import { HOST_URL } from "@/utils";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { ToastContainer } from "react-toastify";
import ReduxProvider from "@/stores/provider";

const inter = Inter({ subsets: ["latin"] });

const meta = {
  title: "OwnerName - Premium Hotels Booking Platform",
  description:
    "Booking the best Hotels in our Booking Platform at OwnerName. Quality and customer satisfaction are our top priorities.",
  image: `${HOST_URL}/assets/images/logo.png`,
};

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: meta.title,
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: HOST_URL,
    locale: "en-US",
    siteName: meta.title,
    type: "website",
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: "summary_large_image",
  },
  alternates: {
    canonical: HOST_URL,
  },
  icons: {
    icon: [
      {
        url: "/assets/favicon/logo_nvb_light.png",
        type: "image/png",
      },
      {
        url: "/assets/favicon/logo_nvb_dark.png",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
      },
      {
        url: "/assets/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: ["/assets/favicon/apple-touch-icon.png"],
    apple: [
      { url: "/assets/favicon/apple-touch-icon.png" },
      {
        url: "/assets/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/assets/favicon/apple-touch-icon.png",
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <ReduxProvider>{children}</ReduxProvider>
          <GeniusModal />
          <ToastContainer />
        </MantineProvider>
      </body>
    </html>
  );
}
