import {
  initialState,
  MysticContext,
  mysticReducer,
} from "@/contexts/mystic_context/MysticContext";
import type {
  ActiveSection,
  MysticContextValue,
} from "@/types/mystic_context_types/mystic_context_types";
import React, { useCallback, useMemo, useReducer } from "react";

const MysticProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mysticReducer, initialState);

  // actions
  // stable references via useCallback
  const openPortal = useCallback((destination: string) => {
    dispatch({ type: "SET_PORTAL_DESTINATION", payload: destination });
    dispatch({ type: "SET_PORTAL_STATE", payload: "opening" });

    // auto transition: opening => open after animation duration

    setTimeout(() => {
      dispatch({ type: "SET_PORTAL_STATE", payload: "open" });
    }, 600);
  }, []);

  const closePortal = useCallback(() => {
    dispatch({ type: "SET_PORTAL_STATE", payload: "closing" });

    setTimeout(() => {
      dispatch({ type: "SET_PORTAL_STATE", payload: "closed" });
      dispatch({ type: "SET_PORTAL_DESTINATION", payload: null });
    }, 400);
  }, []);

  const setActiveSection = useCallback((section: ActiveSection) => {
    dispatch({ type: "SET_ACTIVE_SECTION", payload: section });
  }, []);

  const setHoveredSkill = useCallback((skill: string | null) => {
    dispatch({ type: "SET_HOVERED_SKILL", payload: skill });
  }, []);

  const setMandalaIsPaused = useCallback((paused: boolean) => {
    dispatch({ type: "SET_MANDALA_PAUSED", payload: paused });
  }, []);

  const toggleAmbientEffects = useCallback(() => {
    dispatch({ type: "TOGGLE_AMBIENT_EFFECTS" });
  }, []);

  const setIsLoading = useCallback((loadingState: boolean) => {
    dispatch({ type: "SET_ISLoading", payload: loadingState });
  }, []);

  // memoized context value | prevents unnecessary re-render

  const value = useMemo<MysticContextValue>(
    () => ({
      ...state,
      openPortal,
      closePortal,
      setActiveSection,
      setHoveredSkill,
      setMandalaIsPaused,
      toggleAmbientEffects,
      setIsLoading,
    }),
    [
      state,
      openPortal,
      closePortal,
      setActiveSection,
      setHoveredSkill,
      setMandalaIsPaused,
      toggleAmbientEffects,
      setIsLoading,
    ],
  );
  return <MysticContext value={value}>{children}</MysticContext>;
};

export default MysticProvider;
