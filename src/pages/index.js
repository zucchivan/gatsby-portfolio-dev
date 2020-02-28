import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, OpenSource } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <OpenSource />
    <Skills />
    <Contact />
  </Layout>
);
