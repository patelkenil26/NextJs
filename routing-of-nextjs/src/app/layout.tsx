import { Metadata } from "next";

// Website name mate 
export const metadata: Metadata = {
  title: {
    template: "%s | Technical Agency",
    default: "Technical Agency",
  },
  // seo mate 
  description: "My name is kenil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
