import React, { useState, useRef, useEffect } from 'react';

import { AboutMeParagraph } from './AboutMeStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';


const AboutMe = () => {
  

  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle style={{paddingTop: "1rem"}}>About me</SectionTitle>
      <AboutMeParagraph>
      My current focus is building applications using the javascript ecosystem, specifically in React and NextJs, I'm a person who likes challenges, so I'm always trying  learning something new.<br />
        <br />
        I also like to study some backend and UX design.
        <br />
        When I'm not programming, I'm usually playing a game, watching a series, or reading a manga.
      </AboutMeParagraph>
      <br />
    </Section>
  );
};

export default AboutMe;
