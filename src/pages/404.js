import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import notFoundPageSVG from '../images/404.svg';

const HomeWrapper = styled.div`
  color: white;
  background-color: rgba(102, 51, 153, 0.5);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-image: url(${notFoundPageSVG});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
`;

const HomeInner = styled.div`
  width: 50%;
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <HomeWrapper>
        <HomeInner>
        <h2>This is not the page you're looking for.</h2>
        </HomeInner>
      </HomeWrapper>
    </Layout>
  );
};
export default NotFoundPage;
