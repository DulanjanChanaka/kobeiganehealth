"use client"
import Head from 'next/head';
import { useState, useEffect } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kobeigane Health',
  description: 'Kobeigane Public Health division',
};

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Add your loader component here */}
      <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    </div>
  );
};

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous action (e.g., data fetching)
    const fakeAsyncAction = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Simulating a 2-second delay, replace this with your actual data fetching logic
    };

    fakeAsyncAction();
  }, []); // Run this effect only once, similar to componentDidMount

  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <body className={inter.className}>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FGHES7MCL7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FGHES7MCL7');
            `,
          }}
        />

        {isLoading ? <Loader /> : children}
      </body>
    </html>
  );
}

