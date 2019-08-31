import React from "react";
import styled from "styled-components";

import { P as BlackP, H3 } from "../styles/typography";
import { theme as initialTheme } from "../styles/theme";
import { PATHS } from "../utils/constants";
import PropTypes from "prop-types";

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
const TabLink = styled.button`
  background-color: #555;
  color: white;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  font-size: 17px;
  width: ${calculateTabWidth()}
  &:hover {
    background-color: #777;
  }
`;

const TabContent = styled.div`
  display: ${props => (props.shouldDisplay === true ? "block" : "none")}
  background-color: ${({ theme }) => theme.main}
  padding: 50px;
  text-align: center;
`;

TabContent.propTypes = {
  shouldDisplay: PropTypes.bool,
};
TabContent.defaultProps = {
  shouldDisplay: false,
};
export function calculateTabWidth() {
  const length = Object.keys(PATHS).length - 1;

  return `${100 / length}%`;
}
const Header = ({ children, path, Link }) => {
  const onClick = () => {};
  return (
    <React.Fragment>
      <TabContent shouldDisplay={path === PATHS.blog}>{children}</TabContent>

      <TabContent shouldDisplay={path === PATHS.talks}>
        <h1>Paris</h1>
        <p>Paris is the capital of France.</p>
      </TabContent>

      <TabLink>
        <Link to="/blog">Blog</Link>
      </TabLink>
      <TabLink>
        <Link to="/talks">Talks</Link>
      </TabLink>
    </React.Fragment>
  );
};

export default Header;
