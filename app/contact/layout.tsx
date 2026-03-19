import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/config";

export const metadata: Metadata = createPageMetadata({
  title: "Contato",
  description:
    "Entre em contato com Guilherme Bianchini. Quer colaborar ou trabalhar junto? Vamos conversar via e-mail, GitHub ou LinkedIn.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
