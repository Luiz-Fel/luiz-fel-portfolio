import React from 'react';
import { DiBootstrap, DiReact} from 'react-icons/di';
import { SiNextdotjs, SiRedux, SiTypescript } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tecnologias</SectionTitle>
    <List style={{marginTop: "2rem"}}>
      <ListItem>
        <DiReact size="4rem"/>
        <ListContainer>
          <ListTitle>ReactJS</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiNextdotjs size="3rem"/>
        <ListContainer>
          <ListTitle>NextJS</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiRedux size="3rem"/>
        <ListContainer>
          <ListTitle>Redux</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiBootstrap size="3rem"/>
        <ListContainer>
          <ListTitle>Bootstrap</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTypescript size="3rem"/>
        <ListContainer>
          <ListTitle>Typescript</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
