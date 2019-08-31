import React from "react";
import headshot from "./headshot.png";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import { useObjectState } from "mooks";
const Container = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TextFields = styled.div`
  width: ${props => props.width}
  display: flex;
  justify-content: space-around
  margin-bottom: 25px;
`;
const maxState = { width: 3024, height: 4032 };
const initialState = { width: 1512, height: 2016 };

const Headshot = () => {
  const imgWidth = `${(initialState.width / maxState.width) * 100}%`;
  const imgHeight = `${(initialState.height / maxState.height) * 100}%`;
  return (
    <Container>
      <img
        src={headshot}
        width={imgWidth}
        height={imgHeight}
        alt="Picture of Matt Crowder"
      />
    </Container>
  );
};

export default Headshot;
