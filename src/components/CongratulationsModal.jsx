import PropTypes from 'prop-types';
import './CongratulationsModal.css';

function CongratulationsModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Congratulations!</h2>
        {/* <a href="https://www.amazon.se/s?k=robot+damsuggare&crid=33Q2013382GNU&sprefix=robot+damsuggare%2Caps%2C103&ref=nb_sb_noss"> */}
        <p>You have successfully found the birthday present.</p>
        {/* </a> */}

        <button className="btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

CongratulationsModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CongratulationsModal;
