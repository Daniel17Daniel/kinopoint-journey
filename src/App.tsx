import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import Index from "./pages/Index.tsx";
import Acting from "./pages/Acting.tsx";
import Screenwriting from "./pages/Screenwriting.tsx";
import Journalism from "./pages/Journalism.tsx";
import Apply from "./pages/Apply.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";
import { SiteLayout } from "./components/site/SiteLayout.tsx";
import { HelperProvider, useHelper } from "./components/site/HelperContext.tsx";
import { DirectionHelper } from "./components/site/DirectionHelper.tsx";
import { FloatingLauncher } from "./components/site/FloatingLauncher.tsx";
import { IntroAnimation } from "./components/site/IntroAnimation.tsx";
import { ScrollToTop } from "./components/site/ScrollToTop.tsx";

const queryClient = new QueryClient();

const Shell = () => {
  const { isOpen, open, close } = useHelper();
  const [introDone, setIntroDone] = useState(() => {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem("kp_intro_seen") === "1";
  });

  useEffect(() => {
    if (introDone) sessionStorage.setItem("kp_intro_seen", "1");
  }, [introDone]);

  return (
    <>
      {!introDone && <IntroAnimation onDone={() => setIntroDone(true)} />}
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/acting" element={<Acting />} />
          <Route path="/screenwriting" element={<Screenwriting />} />
          <Route path="/journalism" element={<Journalism />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SiteLayout>
      <FloatingLauncher onClick={open} visible={introDone && !isOpen} />
      <DirectionHelper open={isOpen} onClose={close} />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <HelperProvider>
          <Shell />
        </HelperProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
