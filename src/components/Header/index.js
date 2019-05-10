import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from './Logo';
import Container from './Container';

const Header = (props) => {
  const { children } = props;

  return (
    <Container>
      <Link to="/"><Logo src={ require('assets/logo.png') } alt="Tic Tac Toe" /></Link>
      { children }
    </Container>
  )
}

// not using for now
// Header.propTypes = {
//   dispatch: func.isRequired
// };

export default connect()(Header);
