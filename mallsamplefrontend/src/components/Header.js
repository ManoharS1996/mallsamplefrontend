import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;

  &:hover {
    color: #f5a623;
  }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <img src="https://cdn-icons-png.freepik.com/256/11137/11137568.png?semt=ais_hybrid" alt="Mall Logo" width="40" />
            </div>
            <Nav>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/Contact">Contact</NavItem>
                <NavItem to="/dashboard">Dashboard</NavItem>
            </Nav>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/8847/8847419.png" alt="Profile" width="30" />
            </div>
        </HeaderContainer>
    )
};

export default Header;
