import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Alvin Al",
  description: "Sanity Studio Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
