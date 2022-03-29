import React from 'react';
import { DiBootstrap, DiReact} from 'react-icons/di';
import { SiNextdotjs, SiRedux, SiTypescript } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>My main technologies</SectionText>
    <List style={{marginTop: "2rem"}}>
      <ListItem>
        <DiReact size="4rem"/>
        <ListContainer>
          <ListTitle>ReactJS</ListTitle>
          
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiNextdotjs size="3rem"/>
        <ListContainer>
          <ListTitle>NextJS</ListTitle>
          
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiRedux size="3rem"/>
        <ListContainer>
          <ListTitle>Redux</ListTitle>
          
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiBootstrap size="3rem"/>
        <ListContainer>
          <ListTitle>Bootstrap</ListTitle>
          
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTypescript size="3rem"/>
        <ListContainer>
          <ListTitle>Typescript</ListTitle>
          
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
