

import { Bounce } from "react-awesome-reveal";

const BounceEffect = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="border-2 text-black w-full max-w-screen-lg mx-4">
                <h1 className="bg-gray-300 text-black pl-1 text-xl font-bold">Bounce effect</h1>
                <div className="p-4">
                    <Bounce>
                        <p className="text-2xl font-bold">I am a bounce</p>
                        <p>...then comes my turn...</p>
                        <p>...and finally you see me!</p>
                    </Bounce>
                </div>
            </div>
        </div>
    );
};

export default BounceEffect;
