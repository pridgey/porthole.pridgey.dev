import styled from "styled-components";
import { colors, fonts } from "./../../theme";

export const WeatherWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: flex-end;
  margin: 15px 0;
`;

export const DataStack = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WeatherIcon = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  font-size: 1.6rem;
  color: ${colors.white};
  margin-right: 15px;
`;

export const WeatherItem = styled.span`
  font-size: 1.3rem;
  color: ${colors.white};
  font-family: ${fonts.primary};
  font-weight: 300;
`;

export const WeatherSubItem = styled.span`
  font-size: 0.9rem;
  color: ${colors.white};
  font-family: ${fonts.secondary};
  font-weight: 200;
`;
