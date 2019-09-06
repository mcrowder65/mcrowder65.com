import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
const Routes = styled.div`
  display: flex;
`;

const Route = styled(Link)`
  margin: 10px;
  font-style: oblique;
`;

export const Router = () => {
  return (
    <Routes>
      <Route to="/" activeStyle={{ color: "purple" }}>
        Blog
      </Route>
      <Route to="/talks/" activeStyle={{ color: "purple" }}>
        Talks
      </Route>
      <Route to="/headshot/" activeStyle={{ color: "purple" }}>
        Headshot
      </Route>
    </Routes>
  );
};
