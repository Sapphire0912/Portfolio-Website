import "../styles/globals.css";

export const metadata = {
  title: "JIAYE-HE 個人簡歷網站",
  icons: {
    icon: "/title-he.png",
  },
  description: "展示個人技能與專案的網站。",
  charset: "utf-8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
