import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Missed Call Company — Never lose a lead again",
  description:
    "AI-powered call handling and lead capture for ambitious, high-ticket businesses. We answer every call 24/7, qualify the enquiry, and book the appointment — so you never lose a lead again.",
  openGraph: {
    title: "The Missed Call Company — Never lose a lead again",
    description:
      "AI-powered call handling and lead capture for ambitious, high-ticket businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
