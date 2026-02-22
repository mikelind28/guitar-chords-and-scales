import { guitar } from "../guitar";
import type { Note, SharpNote, FlatNote } from "../types";
import GuitarString from "./GuitarString";

type FretboardType = {
    viewSize: number;
    hoveredNote: Note | undefined;
    setHoveredNote: React.Dispatch<React.SetStateAction<Note | undefined>>;
    currentChordNotes: (SharpNote | FlatNote)[];
    sharpsOrFlats: 'sharps' | 'flats';
}

export default function Fretboard({ viewSize, hoveredNote, setHoveredNote, currentChordNotes, sharpsOrFlats }: FretboardType ) {
    return (
        <table className={`'ml-2 border border-black' ${viewSize === 1 ? 'text-sm' : viewSize === 2 ? 'text-lg' : viewSize === 3 ? 'text-xl' : 'text-sm'}`}>
          <thead>
            <tr className='w-fit bg-gray-300'>
              <th 
                scope='col'
                rowSpan={2}
                className='py-1 px-2 text-nowrap border border-black bg-gray-400' 
              >
                Fret:
              </th>
              {
                Object.keys(guitar[1]).map((fret, index) => {
                  return (
                    <th
                      key={index} 
                      scope='col'
                      className={`text-center pt-1 pb-0 px-2 border border-black border-b-0 ${viewSize === 1 ? 'min-w-11' : viewSize === 2 ? 'min-w-12' : viewSize === 3 ? 'min-w-14' : 'min-w-12'
                      }`}
                    >
                      {fret}
                    </th>
                  )
                })
              }
            </tr>

            <tr className='bg-gray-300'>
              {
                Object.keys(guitar[1]).map((_value, index) => {
                  return (
                    <td 
                      key={index} 
                      className='font-extrabold text-center py-0 px-2 border border-black border-t-0'
                    >
                      {[3,5,7,9,12,15,17,19,21].includes(index) ? "•" : ""}
                    </td>
                  )
                })
              }
            </tr>
          </thead>

          <tbody>
            {
              Object.keys(guitar).map((string, index) => {
                return (
                  <GuitarString
                    key={index}
                    stringNumber={parseInt(string)} 
                    hoveredNote={hoveredNote} 
                    setHoveredNote={setHoveredNote} 
                    currentChordNotes={currentChordNotes} 
                    sharpsOrFlats={sharpsOrFlats}
                    viewSize={viewSize}
                  />
                )
              })
            }
          </tbody>
        </table>
    )
}