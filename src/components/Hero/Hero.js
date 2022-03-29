import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello world, <br />
        I'm Luiz Felipe
      </SectionTitle>
      <SectionText>
      A front-end developer who loves turning coffee into code.
      </SectionText>
      <Button onClick={() => window.location = '#footer'}>Contact me</Button>
    </LeftSection>
  </Section>
);

export default Hero;