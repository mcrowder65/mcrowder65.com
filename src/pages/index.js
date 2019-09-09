import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
const Posts = styled.div`
  margin-top: 30px;
`;
class Index extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allDevArticles.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />
        <Posts>
          {posts.map(({ node: { article } }) => {
            const { title, slug } = article;
            return (
              <article key={article.title}>
                <header>
                  <Typography
                    variant="h5"
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <a
                      target="__blank"
                      style={{ boxShadow: `none` }}
                      href={`https://dev.to/mcrowder65/${slug}`}
                    >
                      {title}
                    </a>
                  </Typography>
                </header>
                <section>
                  <Typography paragraph>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: article.description,
                      }}
                    />
                  </Typography>
                </section>
              </article>
            );
          })}
        </Posts>
      </Layout>
    );
  }
}

export default Index;

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
            body_markdown
            slug
          }
        }
      }
    }
  }
`;
