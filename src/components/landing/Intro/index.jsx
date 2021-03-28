import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi there!</h1>
        <h4>I’m Ivan, a computer engineer, software developer, blockchain enthusiast, bass player and full-time human.  </h4>
        <a href="https://pdfhost.io/v/DW~HkeLZt_ivanzresumepdf.pdf" target="_blank">
          Resume
        </a>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt={'Developer Drawing'} />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
