"use client"

/* Created centralized design tokens and constants for consistent spacing and sizing */

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
  "4xl": "6rem",
}

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}

export const typography = {
  h1: {
    fontSize: "clamp(2rem, 5vw, 3.75rem)",
    lineHeight: "1.2",
    fontWeight: 800,
  },
  h2: {
    fontSize: "clamp(1.75rem, 4vw, 3rem)",
    lineHeight: "1.3",
    fontWeight: 700,
  },
  h3: {
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    lineHeight: "1.4",
    fontWeight: 700,
  },
  body: {
    fontSize: "1rem",
    lineHeight: "1.6",
    fontWeight: 400,
  },
  small: {
    fontSize: "0.875rem",
    lineHeight: "1.5",
    fontWeight: 400,
  },
}

export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
}

export const transitions = {
  fast: "150ms",
  normal: "300ms",
  slow: "500ms",
}

export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
  notification: 1070,
}
