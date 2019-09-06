import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import TalkComponent from "../components/talk";
function Talk(props) {
  const {
    html,
    frontmatter: { title, presentations },
  } = props.data.markdownRemark;
  const siteTitle = props.data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <TalkComponent
        description={html}
        title={title}
        presentations={presentations}
      />
    </Layout>
  );
}

export default Talk;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        presentations {
          date
          title
          source
        }
      }
    }
  }
`;
