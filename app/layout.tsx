import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 模板字符串中需要用${inter.className}来引用变量 */}
      {/* className={} 后紧接的才是jsx中使用JavaScript的途径 */}
      <body className={`${inter.className} antialiased`} >{children}</body>
    </html>
  );
}
