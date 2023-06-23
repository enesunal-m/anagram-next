// components/EndScreen.tsx

import { FC } from 'react';
import MainCard from '../layout/MainCard';

interface EndScreenProps {
    setGameState: (gameState: string) => void;
    score: number;
}

const EndScreen: FC<EndScreenProps> = ({ setGameState, score }) => {
    return (
        <MainCard>
            <div className='flex flex-col items-center justify-center space-y-2'>
                <p className='text-xl font-bold'>Game Over</p>
                <p className='text-lg'>Your score: <b>{score}</b></p>
                <div className='h-[0.2px] w-full bg-white'></div>
                <div className='flex w-full space-x-3'>
                    <button className='px-2 border-0 shadow-md bg-cyan-700 hover:bg-cyan-600 transition-colors py-2 rounded-md' onClick={() => setGameState('start')}>Play Again</button>
                    <button className='px-2 border-0 shadow-md bg-cyan-700 hover:bg-cyan-600 transition-colors py-2 rounded-md' onClick={() => setGameState('start')}>Back to Start Screen</button>
                </div>
            </div>
        </MainCard>
    );
};

export default EndScreen;
