import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const SiteInfo = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={(props) => (
        <Helmet>
          <title>{props.site.siteMetadata.title}</title>
          <meta name="description" content={props.site.siteMetadata.description} />
          <meta name="author" content={props.site.siteMetadata.author} />
          <script src="https://kit.fontawesome.com/0de9f6b5dc.js" crossOrigin="anonymous"></script>
        </Helmet>
    )}
  />
);

export default SiteInfo;
