import React from "react";
import styled from "styled-components";

const HeaderLay = styled.div`
  width: 100%;
  height: 10%;
  background-color: orange;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Header() {
  return (
    <HeaderLay>
      <div>
        <div>logo</div>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </HeaderLay>
  );
}

export default Header;
