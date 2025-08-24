import Header from "../../components/Header";
import ThemeProvider from "../../context/ThemeContext";
import "./globals.css";

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}