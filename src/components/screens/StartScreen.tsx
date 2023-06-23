// components/StartScreen.tsx

import { FC, useState } from 'react';
import MainCard from '../layout/MainCard';

interface StartScreenProps {
    setGameState: (gameState: string) => void;
    setWordLength: (wordLength: number) => void;
}

const StartScreen: FC<StartScreenProps> = ({ setGameState, setWordLength }) => {
    const startGame = (length: number) => {
        console.log('Starting game with word length: ', length);
        setWordLength(length);
        setGameState('game');
    };

    const [selectedWordLength, setSelectedWordLength] = useState(5);

    return (
        <MainCard>
            <h2 className='text-lg font-bold'>Welcome to the Anagram Hunt Game!</h2>
            <div className='flex w-full px-2 space-x-3 items-center'>
                <p className='text-sm font-bold'>Word Length: </p>
                <input className='px-1 py-0.5 rounded-sm text-black'
                    onChange={(e) => {
                        if (e.target.value) setSelectedWordLength(parseInt(e.target.value))
                        else setSelectedWordLength(0)
                    }}
                    value={selectedWordLength} type="text" placeholder='5' />
            </div>
            <div className='w-full flex flex-col space-y-0.5 text-sm'>
                <p>1. Choose Word Length</p>
                <p>2. Press <b>Play!</b></p>
                <p>3. How many anagrams can you find in a minute?</p>
            </div>
            <button onClick={() => { startGame(selectedWordLength) }} className='w-full border-0 shadow-md bg-cyan-700 hover:bg-cyan-600 transition-colors py-2 rounded-md' type="button">Play!</button>
        </MainCard>
    );
};

export default StartScreen;
