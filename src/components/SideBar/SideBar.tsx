import React from 'react';

import { LinksContainer, NavBar } from './SideBar.styles';

const links = [
  {
    id: 'home',
    label: 'Home',
    url: '/',
    section: 'home',
  },
  {
    id: 'explore',
    label: 'Explore',
    url: '/',
    section: 'Explore',
  },
  {
    id: 'subscription',
    label: 'Subscription',
    url: '/',
    section: 'Subscription',
  },
];
const sections = [
  {
    id: 'home',
  },
  {
    id: 'explore',
  },
  {
    id: 'subscriptions',
    label: 'Subscriptions',
  },
];
sections.map(({ id, label }) => {
  const filteredLinks = links.filter((link) => link.section === id);
  return <LinksContainer label={label} links={filteredLinks} />;
});

function SideBar() {
  return (
    <NavBar>
      <LinksContainer />
    </NavBar>
  );
}

export default SideBar;
