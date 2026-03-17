import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/config";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Featured projects: SYNERH, Fyora, GuardianCam AI, LeakScore. Web development, cloud infrastructure, and cybersecurity applications.",
  path: "/projects",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
