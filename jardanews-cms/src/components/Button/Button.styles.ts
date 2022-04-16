import { transparentize } from "polished";
import styled from "styled-components";

const COLORS = {
  red: "#F84735",
  primary: "#0099ff",
  foreground: "#274060",
};

const THEME = {
  danger: {
    bg: COLORS.red,
    color: "#fff",
    onHover: `
        box-shadow: 0 3px 6px rgba(0,0,0,.1);
        cursor:pointer;
        `,
    disabled: {
      color: COLORS.red,
      bg: transparentize(0.75, COLORS.red),
    },
  },

  primary: {
    bg: COLORS.primary,
    color: "#fff",
    onHover: `
        box-shadow: 0 3px 6px rgba(0,0,0,.1);
        cursor:pointer;
        `,
    disabled: {
      color: "#fff",
      bg: transparentize(0.44, COLORS.primary),
    },
  },

  text: {
    bg: "transparent",
    color: "#274060",
    onHover: `
       border-color:#274060;
       cursor:pointer;
        `,
    disabled: {
      color: COLORS.foreground,
      bg: transparentize(0.44, "#508AC9"),
    },
  },
};

export const Wrapper = styled.button<{
  variant: "danger" | "text" | "primary";
}>`
  padding: 6px 8px 4px;
  color: ${(p) => THEME[p.variant].color};
  background-color: ${(p) => THEME[p.variant].bg};
  border: 1px solid ${(p) => THEME[p.variant].bg};

  &:hover,
  &:focus {
    ${(p) => THEME[p.variant].onHover}
  }

  &:disabled {
    background-color: ${(p) => THEME[p.variant].disabled.bg};
    color: ${(p) => THEME[p.variant].disabled.color};
    pointer-events: none;
    border-color: transparent;
  }
`;
