import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import MainMenu from './MainMenu';

const HeaderWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 960px;
  width: 100%;
`;

const SiteTitleWrapper = styled.div`
  display: block;
  width: 50%;
`;

const SiteTitle = styled(Link)`
  font-weight: bold;
  color: rebeccaPurple;
  text-transform: uppercase;
  text-decoration: none;
`;

const Header = () => (
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
      <HeaderWrapper>
        <SiteTitleWrapper>
          <SiteTitle to='/'>gonzalotorres.dev</SiteTitle>
        </SiteTitleWrapper>
        <MainMenu></MainMenu>
      </HeaderWrapper>
    )}
  />
);

export default Header;
