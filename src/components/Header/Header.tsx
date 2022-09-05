import React from 'react';
import { Link } from 'react-router-dom';
import { DivLink, HeaderContainer, Icon, Photo } from './Header.styles';

function Header() {
  return (
    <HeaderContainer>
      <DivLink>
        <Link to='/home'>
          <Icon />
        </Link>
      </DivLink>
      <Photo />
    </HeaderContainer>
  );
}

export default Header;
