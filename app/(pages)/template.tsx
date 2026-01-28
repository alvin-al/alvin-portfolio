"use client";

import { useEffect } from "react";

export default function PagesTemplate({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Ensure scroll starts at top for new pages
    window.history.scrollRestoration = "manual";
  }, []);

  return <>{children}</>;
}
