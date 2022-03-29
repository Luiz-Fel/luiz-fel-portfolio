import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';
import Typewriter from 'typewriter-effect'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
          <a style={{display: 'flex',
        alignItems: 'center',
        color: 'white',
        marginBottom: '20px',

        }}>
            <DiCode size="4rem" /> <span>
              <Typewriter 
             onInit={(typewriter)=> {
  
              typewriter
              .pauseFor(1000)
              .typeString("Luiz-Fel")
              .pauseFor(1200)
              .deleteAll()
              .typeString("Luiz Felipe")
              .pauseFor(300)
              .start()
              .callFunction((state) => {
                state.elements.cursor.style.animation = 'none'
                state.elements.cursor.style.display = 'none'
             })
              
              }} 
            />
              </span> 
        </a>
      </Link>
    </Div1>
    <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Luiz-Fel">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/luiz-felipe-653b7a1a5/?locale=en_US">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
