import React from "react";
import styled from "styled-components";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layoutdiv = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px 10%;
`;

const ContentLay = styled.div`
  margin-top: 10vh;
  height: 90vh;
  width: 100%;
`;

export function Layout({ children }: LayoutProps) {
  return (
    <Layoutdiv>
      <Header />
      <ContentLay>{children}</ContentLay>
    </Layoutdiv>
  );
}

export default Layout;
