"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Metadata can remain here */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kobeigane Health</title>
        <meta
          name="description"
          content="Kobeigane Public Health Division"
        />
      </head>
      <body className={inter.className}>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FGHES7MCL7"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FGHES7MCL7');
            `,
          }}
        />

        {/* Redux Provider */}
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
