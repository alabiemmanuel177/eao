import "./globals.css";
import Nav from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BottomNav from "./components/BottomNav/BottomNav";

export const metadata = {
  title: "Emmanuel Alabi - Software Engineer",
  description:
    "Software Engineer , SE (FullStack + Mobile + Artificial Intelligence & Data Science)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Emmanuel Alabi - Software Engineer</title>
        {/* <link rel="icon" href={logo.src} sizes='80x80' /> */}
        {/* <script
          async
          src="https://analytics.eu.umami.is/script.js"
          data-website-id="682e641c-21a6-465c-9d4b-a5e4f8fe26bc"
        ></script> */}
        {/* 
        <meta
          name="google-site-verification"
          content="y1iOaVdSYWhaKVpLh-rmhnUzFcRFMgjberJk_ULj32E"
        /> */}
        <meta
          property="og:title"
          content="Emmanuel Alabi - Software Engineer"
        />
        <meta property="og:type" content="website" />
        {/* <link rel="icon" href={logo.src} sizes="80x80" /> */}
        {/* <meta property="og:url" content="https://teddyoweh.net" /> */}
        {/* <meta property="og:image" content={teddyimg.src} /> */}
        <meta
          property="og:description"
          content="Software Engineer , SE (FullStack + Mobile + Artificial Intelligence)"
        />
        <meta property="og:site_name" content="EAO" />
        <meta name="robots" content="index, follow"/>
        <meta name="robots" content="all"/>
      </head>
      <body className="flex flex-col items-center">
        <Nav />
        {children}
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
//Lufga Bold", "Lufga Bold Placeholder", sans-serif
