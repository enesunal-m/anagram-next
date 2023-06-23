import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

const MainCard = ({ children }: Props) => {
    return (
        <main>
            <div className='flex flex-col justify-center w-full items-center h-screen container'>
                <div className='p-6 rounded-md bg-gray-800 border-white border-2 flex flex-col space-y-3'>
                    <h1 className="text-3xl font-bold self-center">Anagram Hunt</h1>
                    <div className="w-full h-[1px] bg-white"></div>
                    {children}
                </div>
            </div>
        </main>
    );
};

export default MainCard;
