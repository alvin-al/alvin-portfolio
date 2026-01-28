"use client";

import { useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Preloader from "@/components/ui/Preloader";
import { useLoading } from "@/components/context/LoadingContext";

export default function PreloaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, setIsLoading } = useLoading();

  const handleComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem("visited", "true");
  };

  return (
    <>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader onComplete={handleComplete} />}
      </AnimatePresence>
      {children}
    </>
  );
}
