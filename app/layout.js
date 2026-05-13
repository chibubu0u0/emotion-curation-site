import "./globals.css";

export const metadata = {
  title: "Liminal Objects CMS",
  description: "Emotion-driven curated objects with editable CMS backend"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
