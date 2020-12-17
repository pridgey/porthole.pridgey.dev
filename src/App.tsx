import React from "react";
import { Layout, Events, DateHeader, Weather } from "./components";
import styled from "styled-components";

export const Duo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

function App() {
  return (
    <Layout>
      <>
        <Duo>
          <DateHeader />
          <Weather />
        </Duo>
        <Events />
      </>
    </Layout>
  );
}

export default App;
