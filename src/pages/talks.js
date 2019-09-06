import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import SEO from "../components/seo";
import Talk from "../components/talk";
const Container = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___presentations___date], order: DESC }
    ) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            title
            presentations {
              date
              source
              title
            }
          }
        }
      }
    }
  }
`;
const Talks = ({ location }) => {
  const data = useStaticQuery(pageQuery);
  const siteTitle = data.site.siteMetadata.title;
  const markdown = data.allMarkdownRemark.edges;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Talks" />
      <Container>
        {markdown.map(({ node }, index) => {
          return (
            <Talk
              key={index}
              title={node.frontmatter.title}
              slug={node.fields.slug}
              description={node.html}
              presentations={node.frontmatter.presentations}
            />
          );
        })}
      </Container>
    </Layout>
  );
};

export default Talks;
