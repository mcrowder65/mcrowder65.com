import React from "react";
import MuiCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { rhythm } from "../utils/typography";
import { Link } from "gatsby";
const Card = styled(MuiCard)`
  margin: 10px;
  height: auto;
  width: 100%;
`;
const CardLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
const Line = styled.hr`
  margin-bottom: ${rhythm(1)};
`;
const Links = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

function Talk({ title, slug, description, presentations }) {
  const HeaderLink = slug ? CardLink : React.Fragment;
  return (
    <Card>
      <HeaderLink to={slug}>
        <CardHeader title={title} />
      </HeaderLink>
      <CardContent>
        <Typography variant="body1">
          <div
            dangerouslySetInnerHTML={{ __html: `<div>${description}</div>` }}
          />
        </Typography>
        <Line />
        {(presentations || []).map((presentation, index) => {
          return (
            <Links key={index}>
              <div>
                <Typography paragraph>
                  <a href={presentation.source} target="_blank">
                    {presentation.title}
                  </a>
                </Typography>
              </div>
              <div>
                <Typography paragraph>{presentation.date}</Typography>
              </div>
            </Links>
          );
        })}
      </CardContent>
    </Card>
  );
}

export default Talk;
