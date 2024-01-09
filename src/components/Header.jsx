import PropTypes from 'prop-types';

function Header({currentScore, highScore}) {
  return (
    <div>
      <h1>Pokemon Memory Card Game</h1>
      <p>{'Current Score: ' + currentScore}</p>
      <p>{'High Score: ' + highScore}</p>
    </div>
  )
}
Header.propTypes = {
  currentScore: PropTypes.number,
  highScore: PropTypes.number
};

export default Header;