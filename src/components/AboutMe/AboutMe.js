import React, { useState, useRef, useEffect } from 'react';

import { AboutMeParagraph } from './AboutMeStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';


const AboutMe = () => {
  

  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle style={{paddingTop: "1rem"}}>Sobre</SectionTitle>
      <AboutMeParagraph>
        Meu foco atual é construir aplicações usando o ecossistema javascript, específicamente em React e NextJs, sou uma pessoa que gosta de desafios então estou sempre tentando aprender uma coisa nova.
        <br />
        <br />
        Também gosto de estudar um pouco de back-end e UX design.
        <br />
        Quando não estou programando, geralmente estou jogando um jogo, vendo uma série ou lendo um mangá.
      </AboutMeParagraph>
      <br />
    </Section>
  );
};

export default AboutMe;
