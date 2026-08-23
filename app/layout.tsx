import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biomimicry Lab — Học thiết kế từ tự nhiên",
  description: "Trang tự học tiếng Việt về 10 nguyên lý Biomimicry và quy trình chuyển chiến lược tự nhiên thành giải pháp thiết kế.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="vi"><body>{children}</body></html>;
}
