export default function ViewSize(
    { viewSize, setViewSize }: { viewSize: number, setViewSize: React.Dispatch<React.SetStateAction<number>> }
) {
    return (
        <div className='flex flex-col text-xl'>
            <p>View Size:</p>
            <div className='flex border border-stone-300 bg-stone-500 rounded-sm'>
                <div
                    onClick={() => setViewSize(1)}
                    className={`px-4 py-2 text-center rounded-sm text-xl ${viewSize === 1 
                    ? 'bg-stone-300 border border-stone-400'
                    : 'z-20 bg-stone-100 border border-stone-300 hover:cursor-pointer'}`}
                >
                    1x
                </div>

                <div
                    onClick={() => setViewSize(2)}
                    className={`px-4 py-2 text-center rounded-sm text-xl ${viewSize === 2 
                    ? 'bg-stone-300 border border-stone-400'
                    : 'z-20 bg-stone-100 border border-stone-300 hover:cursor-pointer'}`}
                >
                    2x
                </div>

                <div
                    onClick={() => setViewSize(3)}
                    className={`px-4 py-2 text-center rounded-sm text-xl ${viewSize === 3 
                    ? 'bg-stone-300 border border-stone-400'
                    : 'z-20 bg-stone-100 border border-stone-300 hover:cursor-pointer'}`}
                >
                    3x
                </div>
            </div>
        </div>        
    )
}