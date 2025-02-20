import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-white flex items-center justify-center"
      >
        {children}
      </body>
    </html>
  );
}
