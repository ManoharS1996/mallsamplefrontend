import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #333;
  color: white;
`;

const FooterIcon = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    color: #f5a623;
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterIcon href="https://facebook.com" target="_blank">
                Facebook
            </FooterIcon>
            <FooterIcon href="https://twitter.com" target="_blank">
                Twitter
            </FooterIcon>
            <FooterIcon href="https://instagram.com" target="_blank">
                Instagram
            </FooterIcon>
        </FooterContainer>
    );
}

export default Footer;
