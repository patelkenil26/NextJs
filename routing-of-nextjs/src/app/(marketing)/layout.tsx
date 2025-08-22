export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header style={{ backgroundColor: "blue" }}>Header</header>

      {children}

      <footer style={{ backgroundColor: "gray" }}>Footer</footer>
    </>
  );
}
