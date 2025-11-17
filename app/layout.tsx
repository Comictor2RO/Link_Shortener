import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnipXR",
  description: "Link shortener by SnipXR",
  icons: {
    icon: '/Logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'luxury';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div className="light-mode-background pointer-events-none absolute inset-0 min-h-screen bg-[#fff8e6] overflow-hidden -z-10">
          <div
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage: "url('/background_light.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div className="dark-mode-background pointer-events-none absolute inset-0 min-h-screen bg-[#0f172a] overflow-hidden -z-10">
          <div
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage: "url('/background_dark.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('/grid.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-linear-to-tr from-yellow-400/10 via-transparent to-yellow-600/10 blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  );
}
