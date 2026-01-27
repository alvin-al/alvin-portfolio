import PreloaderWrapper from "@/components/ui/PreloaderWrapper";
import Navigation from "@/components/element/Navigation";
import LenisProvider from "@/components/element/LenisProvider";
import { LoadingProvider } from "@/components/context/LoadingContext";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <LoadingProvider>
        <PreloaderWrapper>
          <Navigation />
          {children}
        </PreloaderWrapper>
      </LoadingProvider>
    </LenisProvider>
  );
}