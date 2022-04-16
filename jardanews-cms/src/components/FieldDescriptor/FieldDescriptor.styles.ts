import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #274060;
  gap: 4px;

  span.Description {
    font-size: 12px;
    font-weight: 700;
    text-transform: lowercase;
  }

  span.Value {
    font-size: 14px;
    font-weight: 400;
  }
`;
