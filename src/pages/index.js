import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
          <p>I'm currently working on this site, but you can reach me on{' '}
            <a href='https://www.linkedin.com/in/gonzalotorrestz/?locale=en_US' target='_blank' rel='noreferrer'>
              LinkedIn <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>{' '}
          if you want to talk.
          </p>
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
