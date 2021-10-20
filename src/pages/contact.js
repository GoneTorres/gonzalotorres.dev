import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import underConstructionSVG from '../images/under_construction.svg';

const HomeWrapper = styled.div`
  color: white;
  background-color: rgba(102, 51, 153, 0.5);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-image: url(${underConstructionSVG});
  background-position: right;
  background-repeat: no-repeat;
  background-size: 50%;
`;

const HomeInner = styled.div`
  width: 50%;
`;

const ContactPage = () => {
  return (
    <Layout>
      <HomeWrapper>
        <HomeInner>
          <h2>Sorry, I'm still working on this page.</h2>
          <p>
            You can find me on{' '}
            <a href='https://www.linkedin.com/in/gonzalotorrestz/?locale=en_US' target='_blank' rel='noreferrer'>
              LinkedIn <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>{' '}
            if you need to contact me.
          </p>
        </HomeInner>
      </HomeWrapper>
    </Layout>
  );
};
export default ContactPage;
