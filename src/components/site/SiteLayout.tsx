import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useHelper } from "./HelperContext";

export const SiteLayout = ({ children }: { children: ReactNode }) => {
  const { open } = useHelper();
  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenHelper={open} />
      <main className="flex-1 pt-[4.5rem]">{children}</main>
      <Footer />
    </div>
  );
};
