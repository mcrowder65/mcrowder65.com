import React from "react";
import { graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allDevArticles.edges;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node: { article } }) => {
          const { title, slug } = article;
          return (
            <article key={article.title}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <a
                    style={{ boxShadow: `none` }}
                    href={`https://dev.to/mcrowder65/${slug}`}
                  >
                    {title}
                  </a>
                </h3>
                {/*<small>{node.frontmatter.date}</small>*/}
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: article.description,
                  }}
                />
              </section>
            </article>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

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
