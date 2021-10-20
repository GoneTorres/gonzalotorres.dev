import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const HomeWrapper = styled.div`
  color: white;
  background-color: rgba(102, 51, 153, 0.5);
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const HomeInner = styled.div`
  width: 50%;
`;

const StyledLinks = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  font-family: 'Exo', sans-serif;
  font-weight: 100;
`;

const AvatarWrapper = styled.div`
  display: flex;
  width: 50%;
`;

const IndexPage = () => {
  return (
    <Layout>
      <HomeWrapper>
        <HomeInner>
          <h2>Hello, I'm Gonzalo</h2>
          <p>a Full Stack Developer</p>
          <p>based in Buenos Aires, Argentina.</p>
          <p>
            <StyledLinks to='/projects'>My work</StyledLinks> • <StyledLinks to='/contact'>Contact me</StyledLinks>
          </p>
        </HomeInner>
        <AvatarWrapper>
          <StaticImage src='../images/digital_nomad.svg' alt='Avatar' placeholder='blurred' layout='constrained'></StaticImage>
        </AvatarWrapper>
      </HomeWrapper>
    </Layout>
  );
};
export default IndexPage;
