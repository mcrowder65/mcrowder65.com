import React from "react";
import headshot from "../../content/assets/headshot.png";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import SEO from "../components/seo";
const Container = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const maxState = { width: 3024, height: 4032 };
const initialState = { width: 1512, height: 2016 };

const Headshot = ({ location, data }) => {
  const imgWidth = `${(initialState.width / maxState.width) * 100}%`;
  const imgHeight = `${(initialState.height / maxState.height) * 100}%`;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Headshot" />
      <Container>
        <img
          src={headshot}
          width={imgWidth}
          height={imgHeight}
          alt="Picture of Matt Crowder"
        />
      </Container>
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
export default Headshot;
