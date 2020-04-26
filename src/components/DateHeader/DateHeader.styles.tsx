import styled from "styled-components";
import { colors, fonts } from "./../../theme";

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-area: header;
  margin-bottom: 1.5rem;
`;

export const TopHeader = styled.div`
  width: 100%;
  font-size: 2rem;
  color: ${colors.white};
  font-family: ${fonts.primary};
  font-weight: 300;
`;

export const BottomHeader = styled.div`
  width: 100%;
  font-size: 1.2rem;
  color: ${colors.white};
  font-family: ${fonts.secondary};
  font-weight: 200;
  padding-left: 1.2rem;
  box-sizing: border-box;
`;
