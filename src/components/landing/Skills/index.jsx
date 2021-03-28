import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="" />
      </Thumbnail>
      <Details>
        <h1>Hello!</h1>
        <p>
          Working as a software developer since 2014, I've experienced challenges in several programming languages, paradigms and environments. You can check it all out on my{' '}
        <a href="https://linkedin.com/in/zucchivan#projects" target="_blank">LinkedIn</a> page.
        </p>
        <Button as={AnchorLink} href="#contact">
          Contact me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
