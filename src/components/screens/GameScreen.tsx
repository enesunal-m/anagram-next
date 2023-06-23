// components/GameScreen.tsx

import { FC, useEffect, useState } from 'react';
import MainCard from '../layout/MainCard';

interface GameScreenProps {
    setGameState: (gameState: string) => void;
    wordLength: number;
    setScore: (score: number) => void;
    score: number;
}

const GameScreen: FC<GameScreenProps> = ({ setGameState, wordLength, setScore, score }) => {
    const [words, setWords] = useState<string[][]>([]);
    const [wordGroup, setWordGroup] = useState<string[]>([]);
    const [remainingWords, setRemainingWords] = useState<string[]>([]);
    const [currentWord, setCurrentWord] = useState<string>('');
    const [time, setTime] = useState<number>(60);
    const [input, setInput] = useState<string>('');
    const [guessedWords, setGuessedWords] = useState<string[]>([]);

    const selectWordGroup = () => {
        const group = words[Math.floor(Math.random() * words.length)];
        setCurrentWord(group[0]);
        setWordGroup(group);
        setRemainingWords(group.filter(word => word !== group[0]));
    };

    useEffect(() => {
        fetch('/data/words.json')
            .then(response => response.json())
            .then(data => {
                setWords(data[wordLength.toString()]);
            });
    }, []);

    useEffect(() => {
        if (time > 0) {
            const timer = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setGameState('end');
        }
    }, [time]);

    useEffect(() => {
        if (words.length > 0) {
            selectWordGroup();
        }
    }, [words]);

    const handleInput = (input: string) => {
        if (remainingWords.includes(input)) {
            setInput('');
            setScore(score + 1);
            setRemainingWords(prevWords => prevWords.filter(word => word !== input));
            setGuessedWords(prevWords => [...prevWords, input]);

            if (remainingWords.length === 1) {
                selectWordGroup();
            }
        }
    };


    return (
        <MainCard>
            <div className='flex w-96 flex-col space-y-2 justify-center items-center'>
                <div className='w-full flex justify-between'>
                    <p className='font-bold'>Score: {score}</p>
                    <p className='font-bold'>Time: {time}</p>
                </div>
                <div className='h-[0.2px] w-full bg-white'></div>
                <p className='text-2xl'>Current word: <b>{currentWord}</b></p>
                <p className='text-lg'>Remaining words: {remainingWords.length}</p>
                <div className='w-full flex space-x-3'>
                    <input className='px-2 py-1 rounded-sm text-black w-3/4' onChange={(e) => { setInput(e.target.value) }} value={input} placeholder='type your answer' type="text" />
                    <button onClick={() => { handleInput(input) }} className='w-1/4 border-0 shadow-md bg-cyan-700 hover:bg-cyan-600 transition-colors py-2 rounded-md' type="button">Submit</button>
                </div>
                <div className='h-[0.2px] w-full bg-white'></div>
                <div>
                    <p className='text-lg text-center'>Words found:</p>
                    <ul>
                        {guessedWords.map((word, index) => (
                            <li className='w-full' key={index}> {index + 1}. {word}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </MainCard>
    );
};

export default GameScreen;
