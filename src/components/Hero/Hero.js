import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there! <br />
          I am Prateek
        </SectionTitle>
        <SectionText>
        Dynamic Computer Science graduate with expertise in Java, Python, and React.js. Skilled in full stack development and collaborative teamwork. Proven track record in creating impactful projects like a Social Media App and a Filming Locations App. Ready to excel in entry-level developer roles.
        </SectionText>
        <Button onClick={() => window.location = 'https://www.linkedin.com/in/prateekkumar-/'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;