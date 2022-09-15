import React from 'react';
import { Container, SectionLink, Image, SectionTitle } from './LinkContainer.styles';

type Section = {
  id: string;
  label?: string;
};

type Link = {
  id: string;
  url: string;
  label: string;
  section: string;
  icon?: string;
};

type LinkContainerProps = {
  section: Section;
  links: Array<Link>;
};

const LinkContainer: React.FC<LinkContainerProps> = ({ section, links }) => (
  <Container>
    <SectionTitle>{section.label}</SectionTitle>
    {links.map((link) => (
      <SectionLink to={link.url}>
        {link.icon && <Image src={link.icon} alt='qualquer coisa' />}
        <span>{link.label}</span>
      </SectionLink>
    ))}
  </Container>
);

export default LinkContainer;
