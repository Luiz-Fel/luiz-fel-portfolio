import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxTitle, BoxText } from './AcomplishmentsStyles';
import { DiReact } from 'react-icons/di';
import {AiOutlineRocket} from 'react-icons/ai'

const data = [
  { title: "Front End Development Libraries", text: 'FreeCodeCamp', time: "conclusion year: 2022", icon: <DiReact size="4rem" />},
  { title: "React trail", text: 'Rocketseat', time:"conclusion year: 2022", icon: <AiOutlineRocket size="4rem" /> }
];

const Acomplishments = () => (
 <Section>
  <SectionDivider />
  <SectionTitle style={{paddingTop: "1rem"}}>Courses | Certifications</SectionTitle>
   <Boxes>
     {data.map((card, index) => (
        <Box key={index}>
          {card.icon}
          <BoxTitle>{card.title}</BoxTitle>
          <BoxText>{card.text}</BoxText>
          <BoxText>{card.time}</BoxText>
        </Box>
     ))}  
   </Boxes>
 </Section>
);

export default Acomplishments;
