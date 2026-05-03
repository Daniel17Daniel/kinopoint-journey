import { createContext, useContext, useState, ReactNode, useCallback } from "react";

interface HelperContextValue {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const HelperContext = createContext<HelperContextValue | null>(null);

export const HelperProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return <HelperContext.Provider value={{ open, close, isOpen }}>{children}</HelperContext.Provider>;
};

export const useHelper = () => {
  const ctx = useContext(HelperContext);
  if (!ctx) throw new Error("useHelper must be used within HelperProvider");
  return ctx;
};
