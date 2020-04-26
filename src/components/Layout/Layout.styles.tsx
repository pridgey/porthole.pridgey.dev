import styled from "styled-components";

export const HomeLayout = styled.main<{ Image: string }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${({ Image }) => Image});
  background-size: cover;
  background-position: center;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
