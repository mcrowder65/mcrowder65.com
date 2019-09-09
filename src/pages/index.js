import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import BlogPost from "../components/blog-post";
import Typography from "@material-ui/core/Typography";

const Posts = styled.div`
  margin-top: 30px;
`;
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allDevArticles {
      edges {
        node {
          article {
            id
            title
            description
            slug
            comments_count
            created_at
            positive_reactions_count
          }
        }
      }
    }
  }
`;
const Stats = styled.div`
  margin: 10px;
`;
function Index(props) {
  const data = useStaticQuery(pageQuery);
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allDevArticles.edges;
  const { totalComments, totalReactions, totalArticles } = posts.reduce(
    (accum, { node: { article } }) => {
      // eslint-disable-next-line no-param-reassign
      accum.totalComments += article.comments_count;
      // eslint-disable-next-line no-param-reassign
      accum.totalReactions += article.positive_reactions_count;
      // eslint-disable-next-line no-param-reassign
      accum.totalArticles += 1;
      return accum;
    },
    { totalComments: 0, totalReactions: 0, totalArticles: 0 }
  );
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Blog" />
      <Posts>
        <Stats>
          <Typography paragraph>
            <strong>Number of articles:</strong> {totalArticles}
            <br />
            <strong>Number of reactions:</strong> {totalReactions}
            <br />
            <strong>Number of comments:</strong> {totalComments}
          </Typography>
        </Stats>
        {posts.map(({ node: { article } }, index) => {
          const {
            title,
            slug,
            description,
            comments_count: commentsCount,
            created_at: createdAt,
            positive_reactions_count: positiveReactionsCount,
          } = article;
          return (
            <BlogPost
              key={index}
              title={title}
              slug={slug}
              description={description}
              commentsCount={commentsCount}
              createdAt={createdAt}
              positiveReactionsCount={positiveReactionsCount}
            />
          );
        })}
      </Posts>
    </Layout>
  );
}

export default Index;
