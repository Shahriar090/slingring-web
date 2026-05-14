import { MysticContext } from "@/contexts/mystic_context/MysticContext";
import type { MysticContextValue } from "@/types/mystic_context_types/mystic_context_types";
import { useContext } from "react";

export function useMystic(): MysticContextValue {
  const context = useContext(MysticContext);

  if (!context) {
    throw new Error(
      "[useMystic] — You are outside the context. " +
        "Wrap your component tree with <MysticProvider> in App.tsx.",
    );
  }

  return context;
}
