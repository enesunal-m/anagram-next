// pages/index.tsx

import { useState } from 'react';
import StartScreen from '../components/screens/StartScreen';
import GameScreen from '../components/screens/GameScreen';
import EndScreen from '../components/screens/EndScreen';

const Home = () => {
  const [gameState, setGameState] = useState('start');
  const [wordLength, setWordLength] = useState(0);
  const [score, setScore] = useState(0);

  if (gameState === 'start') {
    return <StartScreen setGameState={setGameState} setWordLength={setWordLength} />;
  } else if (gameState === 'game') {
    return <GameScreen setGameState={setGameState} wordLength={wordLength} setScore={setScore} score={score} />;
  } else if (gameState === 'end') {
    return <EndScreen setGameState={setGameState} score={score} />;
  }

  return null;
};

export default Home;
