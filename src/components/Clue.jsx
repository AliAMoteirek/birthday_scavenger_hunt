// const Clue = ({ text }) => {
//   return (
//     <div className="clue-container">
//       <p className="clue-text">{text}</p>
//     </div>
//   );
// };

// export default Clue;

import { useState } from 'react';
import PropTypes from 'prop-types';
import './Clue.css';

function Clue(props) {
  const [showHint, setShowHint] = useState(false);

  const handleHintClick = () => {
    setShowHint(true);
    setTimeout(() => setShowHint(false), 5000);
  };

  const handleClueFound = () => {
    props.onClueFound();
  };

  return (
    <div className="clue-container">
      <div className="clue-text">{props.text}</div>
      <div className="clue-image-container">
        <img src={props.image} alt="clue" className="clue-image" />
      </div>
      <div className="clue-location">
        <button onClick={handleHintClick}>Need a hint?</button>
        {showHint && (
          <div className="clue-hint">{`Hint: It's in the ${props.location}`}</div>
        )}
      </div>
      <button onClick={handleClueFound}>I found it!</button>
    </div>
  );
}

Clue.propTypes = {
  text: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClueFound: PropTypes.func.isRequired,
};

export default Clue;
