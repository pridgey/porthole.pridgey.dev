import styled from "styled-components";
import { colors, fonts } from "./../../theme";

export const EventsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: events;
`;

export const EventSection = styled.div`
  width: 100%;
  margin: 15px 0;
`;

export const EventIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
  color: ${colors.white};
`;

export const EventText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const EventsHeader = styled.div`
  width: 100%;
  font-size: 1.3rem;
  font-family: ${fonts.primary};
  font-weight: 300;
  color: ${colors.white};
  border-bottom: 1px solid ${colors.white};
  padding: 4px 8px;
  box-sizing: border-box;
`;

export const EventName = styled.span`
  font-size: 1.1rem;
  font-family: ${fonts.secondary};
  font-weight: 200;
  color: ${colors.white};
`;

export const EventTime = styled.span`
  font-size: 0.8rem;
  font-family: ${fonts.secondary};
  font-weight: 200;
  color: ${colors.white};
`;

export const EventItem = styled.div`
  width: 100%;
  margin: 5px 0;
  display: flex;
  flex-direction: row;
`;
