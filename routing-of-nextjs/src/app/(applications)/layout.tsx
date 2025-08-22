import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Technical Agency",
    default: "Technical Agency",
  },
  description: "My name is kenil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header style={{ backgroundColor: "orange" }}>Header</header>

      {children}

      <footer style={{ backgroundColor: "green" }}>Footer</footer>
    </>
  );
}
