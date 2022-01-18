import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of javascript
      </SectionText>
      <Button onClick={() => window.location = 'https://www.googleapis.com'}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;