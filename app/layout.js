export const metadata = { title: 'Bağlam' };
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
