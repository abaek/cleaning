import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';


const Footer = () => (
      <React.Fragment>
        <FooterWrapper>
          <StyledContainer>

          <div id="contact">
        <h2>Get in Touch</h2>
        <div id="contact-form">
                <form action="https://formspree.io/f/meqplgad" method="POST">
                <input type="hidden" name="_subject" value="Contact request from personal website" />
                <input type="email" name="_replyto" placeholder="Your email" required/>
                <textarea name="message" placeholder="Type your message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>

          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
);


const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
