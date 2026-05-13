import "./globals.css";

export const metadata = {
  title: "Liminal Objects",
  description: "Emotion-driven curated objects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
