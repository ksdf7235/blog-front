import React from "react";
import styled from "styled-components";
import Layout from "../component/Layout";

const ContentGrid = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  justify-content: flex-start;
  background-color: red;
`;

const Content = styled.div`
  background-color: yellow;
  max-height: 400px;
`;

function Home() {
  return (
    <Layout>
      <ContentGrid>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data) => (
          <Content></Content>
        ))}
      </ContentGrid>
    </Layout>
  );
}

export default Home;
