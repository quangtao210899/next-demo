import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Box from '@mui/material/Box'
import PrimarySearchAppBar from './navbar/navbar'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        />
        <link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
        <link rel='shortcut icon' href='/images/favicon.png' />
      </head>
      <body className={inter.className}>
        <Box className='app-content' sx={{ minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}>
          <PrimarySearchAppBar/>
          {children}
        </Box>
      </body>
    </html>
  );
}
