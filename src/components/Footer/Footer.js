import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="/">111-111-111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="/">111-111-111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle></LinkTitle>
          <LinkItem href="/">111-111-111</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Innovating one project at time.
          </Slogan>
        </CompanyContainer>
        <SocialIcons href="/">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
