import styled from "styled-components";

const COLORS = {
  primary: "#0099ff",
  default: "#274060",
};
export const Wrapper = styled.div<{ color: "primary" | "default" }>`
  display: flex;
  flex-direction: column;

  span.Description {
    font-size: 12px;
    font-weight: 400;
    text-transform: lowercase;
  }

  span.Currency {
    font-size: 18px;
    font-weight: 400;
    color: ${(p) => COLORS[p.color]};
  }

  span.Value {
    font-size: 18px;
    font-weight: 900;
    color: ${(p) => COLORS[p.color]};
  }
`;
