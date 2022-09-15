import React from 'react';
import { NavBar } from './SideBar.styles';
import LinkContainer from '../LinkContainer/LinkContainer';
import HomeIcon from '../../assets/Vector.svg';
import Explore from '../../assets/explore.svg';
import Sub from '../../assets/sub.svg';
import Library from '../../assets/library.svg';
import History from '../../assets/history.svg';
import YourVideos from '../../assets/your-videos.svg';
import WatchLater from '../../assets/watch-later.svg';
import Liked from '../../assets/liked.svg';
import ShowMore from '../../assets/show-more.svg';
import User from '../../assets/user.svg';

const links = [
  {
    id: 'home',
    label: 'Home',
    url: '/',
    section: 'home',
    icon: HomeIcon,
  },
  {
    id: 'explore',
    label: 'Explore',
    url: '/',
    section: 'home',
    icon: Explore,
  },
  {
    id: 'subscription',
    label: 'Subscription',
    url: '/',
    section: 'home',
    icon: Sub,
  },
  {
    id: 'library',
    label: 'Library',
    url: '/',
    section: 'explore',
    icon: Library,
  },
  {
    id: 'history',
    label: 'History',
    url: '/',
    section: 'explore',
    icon: History,
  },
  {
    id: 'your-videos',
    label: 'Your Videos',
    url: '/',
    section: 'explore',
    icon: YourVideos,
  },
  {
    id: 'watch-later',
    label: 'Watch Later',
    url: '/',
    section: 'explore',
    icon: WatchLater,
  },
  {
    id: 'liked-videos',
    label: 'Liked Videos',
    url: '/',
    section: 'explore',
    icon: Liked,
  },
  {
    id: 'show-more',
    label: 'Show More',
    url: '/',
    section: 'explore',
    icon: ShowMore,
  },
  {
    id: 'cleiton',
    label: 'Cleiton',
    url: '/',
    section: 'subscriptions',
    icon: User,
  },
  {
    id: 'asdrubal',
    label: 'Asdrubal',
    url: '/',
    section: 'subscriptions',
    icon: User,
  },
  {
    id: 'vanira',
    label: 'Vanira',
    url: '/',
    section: 'subscriptions',
    icon: User,
  },
  {
    id: 'roberval',
    label: 'Roberval',
    url: '/',
    section: 'subscriptions',
    icon: User,
  },
  {
    id: 'gertrudes',
    label: 'Gertrudes',
    url: '/',
    section: 'subscriptions',
    icon: User,
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
    label: 'SUBSCRIPTIONS',
  },
];

const SideBar = () => (
  <NavBar>
    {sections.map((section) => {
      const filteredLinks = links.filter((link) => link.section === section.id);
      return <LinkContainer section={section} links={filteredLinks} />;
    })}
  </NavBar>
);

export default SideBar;
