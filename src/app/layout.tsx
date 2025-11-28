import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "FridayMonk — People-first Product Engineering",
  description:
    "We bring the best people together to build reliable, beautiful products.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_20%_20%,rgba(88,28,135,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.10),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.08),transparent_40%)]" />
          <div className="relative">{children}</div>
        </main>
      </body>
    </html>
  );
}
