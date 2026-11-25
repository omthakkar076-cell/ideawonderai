import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Digital Marketing & Automation Agency | IdeaWonder AI",
  description:
    "Grow your business with AI-powered SEO, GEO, paid advertising, lead generation, social media marketing and business automation.",
  applicationName: "IdeaWonder AI",
  keywords: [
    "AI digital marketing agency",
    "AI marketing agency",
    "digital marketing agency for B2B",
    "AI business automation services",
    "SEO and GEO services",
    "AI-powered lead generation",
    "performance marketing agency",
    "business process automation",
  ],
  icons: { icon: "/brand/ideawonder-icon.png" },
  openGraph: {
    type: "website",
    siteName: "IdeaWonder AI",
    title: "AI Digital Marketing & Automation Agency | IdeaWonder AI",
    description:
      "AI-powered marketing. Measurable acquisition. Intelligent automation.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
