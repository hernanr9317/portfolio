import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Hello. My name is Hernan Rascon.
      This is my personal Portfolio, a page dedicated to presenting myself and showing my web developer projects.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/hernanr9317'}>See More</Button>
    </LeftSection>
  </Section>

);

export default Hero;