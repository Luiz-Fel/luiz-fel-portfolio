import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Telephone number</LinkTitle>
          <LinkItem> +55 79988368471</LinkItem>
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
          Learn. Build. Relearn.
          </Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/Luiz-Fel">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/luiz-felipe-653b7a1a5/?locale=en_US">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
