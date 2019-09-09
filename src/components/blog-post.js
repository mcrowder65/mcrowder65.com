import React from "react";
import MuiCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { rhythm } from "../utils/typography";
import { format } from "date-fns";
import OpenInNew from "@material-ui/icons/OpenInNew";
const Card = styled(MuiCard)`
  margin: 10px;
  height: auto;
  width: 100%;
`;
const CardLink = styled.a`
  color: black;
  text-decoration: none;
  box-shadow: none;
  margin-top: 10px;
`;
const Line = styled.hr`
  margin-bottom: ${rhythm(1)};
  margin-top: 10px;
`;
const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

function BlogPost({
  title,
  slug,
  description,
  commentsCount,
  createdAt,
  positiveReactionsCount,
}) {
  return (
    <Card>
      {/*<CardLink>*/}
      <div>
        <CardHeader
          title={
            <div>
              {title}{" "}
              <CardLink
                href={`https://dev.to/mcrowder65/${slug}`}
                target="__blank"
              >
                <OpenInNew />
              </CardLink>
            </div>
          }
        />
      </div>
      {/*</CardLink>*/}
      <CardContent>
        <Typography variant="body1">{description}</Typography>
        <Line />
        <Stats>
          <Typography paragraph>
            Date: {format(new Date(createdAt), "MM/dd/yyyy")}
          </Typography>
          <Typography paragraph>Reactions: {positiveReactionsCount}</Typography>
          <Typography paragraph>Comments: {commentsCount}</Typography>
        </Stats>
      </CardContent>
    </Card>
  );
}

export default BlogPost;
