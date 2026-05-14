// Define all global UI states managed by the MysticProvider

export type PortalState = "closed" | "opening" | "open" | "closing";
export type ActiveSection =
  | "home"
  | "about"
  | "projects"
  | "skills"
  | "contact";
export type MysticTheme = "void" | "mirror"; // future theme toggle

export type MysticState = {
  // Portal / Page transition
  portalState: PortalState;
  portalDestination: string | null; // the route being navigated to

  // Active navigation section (for highlight / scroll tracking)

  activeSection: ActiveSection;

  // Mandala interaction
  hoveredSkill: string | null; // which skill ring is hovered
  mandalaIsPaused: boolean; // pause all ring on hover

  // Ambient effects toggle (accessibility)
  ambientEffectsEnabled: boolean;

  // Loading  state (API calls)
  isLoading: boolean;
};

export type MysticActions = {
  openPortal: (destination: string) => void;
  closePortal: () => void;
  setActiveSection: (section: ActiveSection) => void;
  setHoveredSkill: (skill: string | null) => void;
  setMandalaIsPaused: (paused: boolean) => void;
  toggleAmbientEffects: () => void;
  setIsLoading: (state: boolean) => void;
};

// The full context shape consumers receive
export interface MysticContextValue extends MysticState, MysticActions {}
