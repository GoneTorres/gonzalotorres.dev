import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import SiteInfo from './SiteInfo';

const GlobalStyles = createGlobalStyle`
body{
  margin: 0 !important;
  padding: 10px !important;
}
*{font-family: 'Exo', sans-serif;}
`;

const LayoutContainer = styled.main`
  margin: 0 auto;
  max-width: 960px;
`;

const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 100px 0;
`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <GlobalStyles />
    <SiteInfo />
    <Header />
    <MainContent>{children}</MainContent>
    <Footer></Footer>
  </LayoutContainer>
);

export default Layout;
