import React from "react";
import { Router } from "./router";
import { rhythm } from "../utils/typography";
import { GitHub, Twitter } from "./social";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;
const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Icons = styled.div`
  margin-top: 10px;
`;
function Layout(props) {
  const { title, children } = props;

  return (
    <Container>
      <Header>
        <Typography variant="h3">{title}</Typography>
        <Icons>
          <Twitter />
          <GitHub />
        </Icons>
      </Header>
      <main>
        <Router />
        {children}
      </main>
    </Container>
  );
}

export default Layout;
