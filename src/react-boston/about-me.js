import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  text: props => {
    let fontSize = props.isPhone ? theme.phoneFontSize : props.fontSize;
    if (fontSize === undefined) fontSize = theme.textSize;
    return {
      fontSize: fontSize * props.fontMultiplier,
      textAlign: props.align,
    };
  },
}));
const Text = ({ children, fontSize, fontMultiplier, align }) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(`(max-width: ${theme.maxWidth}px)`);
  const classes = useStyles({ fontSize, isPhone, fontMultiplier, align });
  return <Typography className={classes.text}>{children}</Typography>;
};
Text.defaultProps = {
  fontMultiplier: 1,
};
import styled from "styled-components";
const H1 = styled.h1`
  font-weight: normal;
`;
const Li = ({ children, fontSize = 50, ...props }) => {
  return (
    <li>
      <H1>
        <Text {...props} fontSize={fontSize}>
          {children}
        </Text>
      </H1>
    </li>
  );
};
const Container = ({
  children,
  flexDirection = "column",
  justifyContent = "center",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection,
        justifyContent,
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

const AboutMe = () => {
  const code = "https://testingreactboston.netlify.com";
  return (
    <Container flexDirection="column">
      <Text>
        <a href={code} target="_blank" rel="noopener noreferrer">
          {code.replace("https://", "")}
        </a>
      </Text>
      <h1 style={{ fontWeight: "normal" }}>
        <ul>
          <Li>I am Matt Crowder</Li>
          <Li>@mcrowder65 </Li>
          <Li>Wife and dog</Li>
          <Li>
            <a
              href={"https://meetup.com/NoVaJS"}
              target="_blank"
              rel="noopener noreferrer"
            >
              NoVaJS organizer
            </a>
          </Li>
          <div>
            <Li>Things I enjoy:</Li>
            <ul>
              <Li>lifting</Li>
              <Li>running</Li>
              <Li>football</Li>
            </ul>
          </div>
        </ul>
      </h1>
    </Container>
  );
};

export default AboutMe;
