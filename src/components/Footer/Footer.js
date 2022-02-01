import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Telefone</LinkTitle>
          <LinkItem href="/">79 98836-8471</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="/">luizfelipesantospereira01@gmail.com
</LinkItem>
        </LinkColumn>
        
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            PARTE DO SLOGAN
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
