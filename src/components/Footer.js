import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  max-width: 960px;
  width: 100%;
  padding: 10px 0;
  position: fixed;
  bottom: 0px;
  color: rebeccaPurple;
  margin: 0 auto;
  border-top: 1px solid rebeccaPurple;
  display: flex;
  justify-content: space-between;
`;

const FooterLink = styled.a`
  margin: 2px 3px;
  color: rebeccaPurple;
  font-size: large;
`;

const Footer = () => (
  <FooterWrapper>
    <div>© 2021 Gonzalo Torres Tonkowicz. All rights reserved.</div>
    <div>
      <FooterLink href='https://github.com/gonetorres' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faGithub} />
      </FooterLink>
      <FooterLink href='https://www.linkedin.com/in/gonzalotorrestz/' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faLinkedin} />
      </FooterLink>
    </div>
  </FooterWrapper>
);

export default Footer;
