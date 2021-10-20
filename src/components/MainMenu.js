import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const MainMenuWrapper = styled.div`
  display: block;
  width: 50%;
`;

const MenuItemsWrapper = styled.div`
  display: flex;
  background-color: rebeccaPurple;
  justify-content: flex-end;
`;

const MenuItem = styled(Link)`
  color: white;
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  text-transform: uppercase;
`;

const MainMenu = () => {
  return (
    <MainMenuWrapper>
      <MenuItemsWrapper>
        <MenuItem to={`/`}>Home</MenuItem>
        <MenuItem to={`/projects/`}>Projects</MenuItem>
        <MenuItem to={`/contact/`}>Contact</MenuItem>
      </MenuItemsWrapper>
    </MainMenuWrapper>
  );
};
export default MainMenu;
