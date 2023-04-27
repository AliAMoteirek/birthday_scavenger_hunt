// import Clue from './Clue';

// const clues = [
//   'Your adventure starts where we keep the things that help us stay caffeinated in the morning.',
//   'Time to put your best foot forward and head to the place where we keep our shoes.',
//   'This next clue is where we keep the things that give us access to the outside world.',
//   'Feeling refreshed? This clue is hidden where we clean ourselves up.',
//   "You're almost there! This final clue is where we gather to share meals and make memories.",
// ];

// const App = () => {
//   return (
//     <div className="app-container">
//       <h1>Happy Birthday!</h1>
//       <p>Let's start your adventure...</p>
//       {clues.map((clue, index) => (
//         <Clue key={index} text={clue} />
//       ))}
//     </div>
//   );
// };

// export default App;

import { useState } from 'react';
import Clue from './components/Clue';
import CongratulationsModal from './components/CongratulationsModal';
import { coffee, shoes, keys, shower, bedroom } from './assets';
import './App.css';

function App() {
  const [clueIndex, setClueIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const clues = [
    {
      text: "Let's start your adventure in the place where we keep our tea mugs.",
      location: 'Kitchen',
      image: coffee,
    },
    {
      text: 'Time to put your best foot forward and head to the place where we keep our shoes.',
      location: 'Closet',
      image: shoes,
    },
    {
      text: 'This next clue is where we keep the things that give us access to the outside world.',
      location: 'Key rack',
      image: keys,
    },
    {
      text: 'Feeling refreshed? This clue is hidden where we clean ourselves up.',
      location: 'Bathroom',
      image: shower,
    },
    {
      text: "You're almost there! Great job! This final clue is where we rest our heads at night.",
      location: 'Bedroom',
      image: bedroom,
    },
  ];

  const handleClueFound = () => {
    if (clueIndex < clues.length - 1) {
      setClueIndex(clueIndex + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <h1>Birthday Scavenger Hunt1</h1>
      <Clue
        text={clues[clueIndex].text}
        location={clues[clueIndex].location}
        image={clues[clueIndex].image}
        onClueFound={handleClueFound}
      />
      {/* <CongratulationsModal show={showModal} onClose={handleModalClose} /> */}
    </div>
  );
}

export default App;
