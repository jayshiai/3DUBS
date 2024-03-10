import LoadingScript from "@/components/nav/LoadingScript";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
export const metadata = {
  title: "3DUBS",
  description: "A DevsTomorrow Initiative",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`no-scrollbar grid place-content-center bg-white  overflow-x-hidden  `}
      >
        <LoadingScript />
        <script src="/js/loader.js" />

        {children}
        <Analytics />
      </body>
    </html>
  );
}
