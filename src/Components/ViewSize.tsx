export default function ViewSize(
    { viewSize, setViewSize }: { viewSize: number, setViewSize: React.Dispatch<React.SetStateAction<number>> }
) {
    return (
        <div className='text-lg'>
            <p>View size:</p>
            <div className='w-fit rounded-sm flex text-center bg-gray-700 
            *:py-1 *:px-3 *:rounded-sm *:border *:border-gray-600'>
                <div
                    onClick={() => setViewSize(1)}
                    className={`
                        ${viewSize === 1 
                        ? 'bg-yellow-500'
                        : 'z-20 bg-stone-300 hover:cursor-pointer'}
                    `}
                    style={ viewSize === 1 
                        ? { boxShadow: 'inset 1px 2px 5px 1px rgb(67 32 4 / 0.75)' }
                        : { boxShadow: '1px 2px 3px rgb(0 0 0 / 0.5), inset 2px 2px rgb(255 255 255 / 0.5), inset -1px -1px rgb(0 0 0 / 0.5)' }
                    }
                >
                    1x
                </div>

                <div
                    onClick={() => setViewSize(2)}
                    className={`
                        ${viewSize === 2 
                        ? 'bg-yellow-500'
                        : 'z-20 bg-stone-300 hover:cursor-pointer'}
                    `}
                    style={ viewSize === 2 
                        ? { boxShadow: 'inset 1px 2px 5px 1px rgb(67 32 4 / 0.75)' }
                        : { boxShadow: '1px 2px 3px rgb(0 0 0 / 0.5), inset 2px 2px rgb(255 255 255 / 0.5), inset -1px -1px rgb(0 0 0 / 0.5)' }
                    }
                >
                    2x
                </div>

                <div
                    onClick={() => setViewSize(3)}
                    className={`
                        ${viewSize === 3 
                        ? 'bg-yellow-500'
                        : 'z-20 bg-stone-300 hover:cursor-pointer'}
                    `}
                    style={ viewSize === 3 
                        ? { boxShadow: 'inset 1px 2px 5px 1px rgb(67 32 4 / 0.75)' }
                        : { boxShadow: '1px 2px 3px rgb(0 0 0 / 0.5), inset 2px 2px rgb(255 255 255 / 0.5), inset -1px -1px rgb(0 0 0 / 0.5)' }
                    }
                >
                    3x
                </div>
            </div>
        </div>        
    )
}