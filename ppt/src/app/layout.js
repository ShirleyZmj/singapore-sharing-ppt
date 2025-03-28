import "./globals.css";

export const metadata = {
  title: "新加坡工作与生活分享",
  description: "新加坡工作与生活分享 PPT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
