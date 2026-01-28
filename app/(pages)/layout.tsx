"use client";
import PreloaderWrapper from "@/components/ui/PreloaderWrapper";
import Navigation from "@/components/element/Navigation";
import LenisProvider from "@/components/element/LenisProvider";
import { LoadingProvider } from "@/components/context/LoadingContext";
import HomeFooter from "@/components/HomeFooter";
// import PageTransition from "@/components/ui/PageTransition";
import { usePathname } from "next/navigation";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <LenisProvider>
      <LoadingProvider>
        <PreloaderWrapper>
          {/* <PageTransition> */}
            <Navigation />
            {children}
            {!pathname.startsWith("/dashboard") && <HomeFooter />}
          {/* </PageTransition> */}
        </PreloaderWrapper>
      </LoadingProvider>
    </LenisProvider>
  );
}