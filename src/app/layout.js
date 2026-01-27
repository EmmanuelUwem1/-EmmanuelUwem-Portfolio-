import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/custum-cursor";

import {
  Bungee_Hairline,
  Audiowide,
  Montserrat,
  Lato,
  Funnel_Display,
  Monoton,
  Turret_Road,
} from "next/font/google";


const bungeeHairline = Bungee_Hairline({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee-hairline",
});

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-audiowide",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
});

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-funnel-display",
});

const monoton = Monoton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-monoton",
});

const turretRoad = Turret_Road({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800"],
  variable: "--font-turret-road",
});


export const metadata = {
  title: "Emmanuel Uwem | Software Engineer",
  description: "Creative Software Engineer blending design and technology.",

  metadataBase: new URL("https://emmanueluwem1.vercel.app"),

  openGraph: {
    title: "Emmanuel Uwem | Software Engineer Portfolio",
    description:
      "Explore modern web experiences built with React, Next.js, Tailwind, and more.",
    url: "https://emmanueluwem1.vercel.app",
    siteName: "Emmanuel Uwem Portfolio",
    images: [
      {
        url: "https://emmanueluwem1.vercel.app/Emmanuel Uwem.jpeg",
        width: 1200,
        height: 630,
        alt: "Emmanuel Uwem - Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Uwem | Software Engineer",
    description: "Creative Software Engineer blending design and technology.",
    images: ["https://emmanueluwem1.vercel.app/Emmanuel Uwem.jpeg"], 
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${bungeeHairline.variable}
        ${audiowide.variable}
        ${montserrat.variable}
        ${lato.variable}
        ${funnelDisplay.variable}
        ${monoton.variable}
        ${turretRoad.variable}
      `}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className="antialiased">
        <div
          aria-hidden="true"
          className="sr-only pointer-events-none fixed -top-[9999px]"
          style={{
            fontFamily: `
              var(--font-bungee-hairline),
              var(--font-audiowide),
              var(--font-montserrat),
              var(--font-lato),
              var(--font-funnel-display),
              var(--font-monoton),
              var(--font-turret-road)
            `,
          }}
        >
          font force
        </div>
        <CustomCursor />
        <Header />
        <main className="overflow-hidden min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
