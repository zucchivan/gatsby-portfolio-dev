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
        <h4>I’m Ivan and I’m a computer engineer and full-stack developer!</h4>
        <Button as={AnchorLink} href="#contact">
          Resumé
        </Button>
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
