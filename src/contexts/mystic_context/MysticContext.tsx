import type {
  ActiveSection,
  MysticContextValue,
  MysticState,
  PortalState,
} from "@/types/mystic_context_types/mystic_context_types";
import { createContext } from "react";

// Initial State
export const initialState: MysticState = {
  portalState: "closed",
  portalDestination: null,
  activeSection: "home",
  hoveredSkill: null,
  mandalaIsPaused: false,
  ambientEffectsEnabled: true,
  isLoading: false,
};

// Action types

type MysticAction =
  | { type: "SET_PORTAL_STATE"; payload: PortalState }
  | { type: "SET_PORTAL_DESTINATION"; payload: string | null }
  | { type: "SET_ACTIVE_SECTION"; payload: ActiveSection }
  | { type: "SET_HOVERED_SKILL"; payload: string | null }
  | { type: "SET_MANDALA_PAUSED"; payload: boolean }
  | { type: "TOGGLE_AMBIENT_EFFECTS" }
  | { type: "SET_ISLoading"; payload: boolean };

// Reducer

export function mysticReducer(
  state: MysticState,
  action: MysticAction,
): MysticState {
  switch (action.type) {
    case "SET_PORTAL_STATE":
      return { ...state, portalState: action.payload };

    case "SET_PORTAL_DESTINATION":
      return { ...state, portalDestination: action.payload };

    case "SET_ACTIVE_SECTION":
      return { ...state, activeSection: action.payload };
    case "SET_HOVERED_SKILL":
      return { ...state, hoveredSkill: action.payload };
    case "SET_MANDALA_PAUSED":
      return { ...state, mandalaIsPaused: action.payload };
    case "TOGGLE_AMBIENT_EFFECTS":
      return { ...state, ambientEffectsEnabled: !state.ambientEffectsEnabled };
    case "SET_ISLoading":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

// Create Context
export const MysticContext = createContext<MysticContextValue | null>(null);
