import React from "react";
import styled from "styled-components";
import { P as BlackP, H3 } from "../styles/typography";

const Outer = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.main};
`;

const Inner = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const P = styled(BlackP)`
  color: white;
`;
const Header = ({ children }) => {
  return (
    <Outer>
      <Inner>
        <div>
          <H3>Matt Crowder</H3>
        </div>
        <div>
          <P>Blog Talks About</P>
        </div>
      </Inner>
      {children}
    </Outer>
  );
};

export default Header;
