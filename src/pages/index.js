import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { ThemeProvider } from "styled-components";
import { theme as initialTheme } from "../styles/theme";
import { useObjectState } from "mooks";
import { PATHS } from "../utils/constants";
import Header from "../components/header";

function Index(props) {
  const [theme, setTheme] = useObjectState(initialTheme);
  React.useEffect(() => {
    if (props.path === PATHS.root || props.path === PATHS.blog) {
      setTheme({ main: "blue" });
    } else if (props.path === PATHS.talks) {
      setTheme({ main: "purple" });
    }
  }, [props.path]);
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      {/*
        This fragment needs to be here
        https://github.com/gatsbyjs/gatsby/issues/16481
      */}
      <React.Fragment>
        <Header Link={Link}>Hello!</Header>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Index;
