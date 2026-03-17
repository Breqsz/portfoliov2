import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/config";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Guilherme Bianchini. Interested in collaborating or working together? Let's connect via email, GitHub, or LinkedIn.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
