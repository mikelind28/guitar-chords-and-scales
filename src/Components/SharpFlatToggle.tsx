type SharpFlatToggleType = {
    sharpsOrFlats: "sharps" | "flats";
    setSharpsOrFlats: React.Dispatch<React.SetStateAction<"sharps" | "flats">>;
}

export default function SharpFlatToggle({ sharpsOrFlats, setSharpsOrFlats }: SharpFlatToggleType) {
    return (
        <div className="text-lg">
            <p>Use sharps or flats:</p>
            <div 
                className='w-fit rounded-sm flex text-center bg-gray-700 
                *:w-20 *:py-1 *:px-3 *:rounded-sm *:border *:border-gray-600'
            >
                <div 
                    onClick={() => setSharpsOrFlats('sharps')}
                    className={`${sharpsOrFlats === 'flats' 
                        ? 'z-20 bg-stone-300 hover:cursor-pointer' 
                        : 'bg-yellow-500'}`}
                    style={ sharpsOrFlats === 'flats' 
                        ? { boxShadow: '1px 2px 3px rgb(0 0 0 / 0.5), inset 2px 2px rgb(255 255 255 / 0.5), inset -1px -1px rgb(0 0 0 / 0.5)' }   
                        : { boxShadow: 'inset 1px 2px 5px 1px rgb(67 32 4 / 0.75)' }
                    }
                >
                    Sharps
                </div>

                <div 
                    onClick={() => setSharpsOrFlats('flats')}
                    className={`${sharpsOrFlats === 'sharps' 
                        ? 'z-20 bg-stone-300 hover:cursor-pointer' 
                        : 'bg-yellow-500'}`}
                    style={ sharpsOrFlats === 'sharps' 
                        ? { boxShadow: '1px 2px 3px rgb(0 0 0 / 0.5), inset 2px 2px rgb(255 255 255 / 0.5), inset -1px -1px rgb(0 0 0 / 0.5)' }   
                        : { boxShadow: 'inset 1px 2px 5px 1px rgb(67 32 4 / 0.75)' }
                    }
                >
                    Flats
                </div>
            </div>
        </div>
    );
}