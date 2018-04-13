import React from 'react';
import Nav from './Nav';

const Header = (props) => {
  return(
    <header>
      <Nav favoriteMovie={props.favoriteMovie} />
    </header>
  );
}

export default Header;
