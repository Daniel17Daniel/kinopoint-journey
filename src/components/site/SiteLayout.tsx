import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AnnouncementBar } from "./AnnouncementBar";
import { useHelper } from "./HelperContext";

export const SiteLayout = ({ children }: { children: ReactNode }) => {
  const { open } = useHelper();
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header onOpenHelper={open} />
      <main className="flex-1 pt-[7.5rem]">{children}</main>
      <Footer />
    </div>
  );
};
