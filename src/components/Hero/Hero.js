import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Olá mundo, <br />
        Eu sou Luiz Felipe
      </SectionTitle>
      <SectionText>
        Um desenvolvedor front-end que ama transformar café em código. 
      </SectionText>
      <Button onClick={() => window.location = 'https://www.googleapis.com'}>Entre em contato</Button>
    </LeftSection>
  </Section>
);

export default Hero;