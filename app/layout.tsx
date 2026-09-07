import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umer Child & Mother Care Complex",
  description:
    "Umer Child & Mother Care Complex — gentle, expert care for mothers and children at every stage, from pregnancy through childhood.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body">
        {children}
      </body>
    </html>
  );
}
