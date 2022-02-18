import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Telefone</LinkTitle>
          <LinkItem>79 98836-8471</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="mailto:luizfelipesantospereira01@gmail.com">luizfelipesantospereira01@gmail.com
</LinkItem>
        </LinkColumn>
        
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Aprender. Construir. Reaprender.
          </Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/Luiz-Fel">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/luiz-felipe-653b7a1a5/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
