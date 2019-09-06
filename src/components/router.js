import React from "react";
import styled from "styled-components";

const Routes = styled.div`
  display: flex;
`;

const Route = styled.a`
  margin: 10px;
  font-style: oblique;
`;

export const Router = () => {
  return (
    <Routes>
      <Route href="/">Blog</Route>
      <Route href="/headshot">Headshot</Route>
    </Routes>
  );
};
