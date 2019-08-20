import React from "react";
import PropTypes from "prop-types";
import { default as styled, ThemeProvider } from "styled-components";
import { theme as initialTheme } from "../styles/theme";
import { useObjectState } from "mooks";
const TabLink = styled.button`
  background-color: #555;
  color: white;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  font-size: 17px;
  width: 25%;
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

const CITIES = {
  London: "London",
  Paris: "Paris",
  Tokyo: "Tokyo",
  Oslo: "Oslo",
};
function Index() {
  const [city, setCity] = React.useState(CITIES.London);
  const [theme, setTheme] = useObjectState(initialTheme);
  const onClick = (c, color) => () => {
    setCity(c);
    setTheme({ main: color });
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <TabContent shouldDisplay={city === CITIES.London}>
          <h1>London</h1>
          <p>London is the capital city of England.</p>
        </TabContent>

        <TabContent shouldDisplay={city === CITIES.Paris}>
          <h1>Paris</h1>
          <p>Paris is the capital of France.</p>
        </TabContent>

        <TabContent shouldDisplay={city === CITIES.Tokyo}>
          <h1>Tokyo</h1>
          <p>Tokyo is the capital of Japan.</p>
        </TabContent>

        <TabContent shouldDisplay={city === CITIES.Oslo}>
          <h1>Oslo</h1>
          <p>Oslo is the capital of Norway.</p>
        </TabContent>
        <TabLink onClick={onClick(CITIES.London, initialTheme.main)}>
          London
        </TabLink>
        <TabLink onClick={onClick(CITIES.Paris, "blue")}>Paris</TabLink>
        <TabLink onClick={onClick(CITIES.Tokyo, "purple")}>Tokyo</TabLink>
        <TabLink onClick={onClick(CITIES.Oslo, "orange")}>Oslo</TabLink>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Index;
