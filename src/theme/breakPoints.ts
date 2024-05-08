const breakpoints = {
  base: "0px",
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1440px",
} as const;

export default breakpoints;

export type BreakPointType = typeof breakpoints;
