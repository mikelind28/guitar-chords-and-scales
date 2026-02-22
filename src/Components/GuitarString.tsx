import { guitar } from "../guitar";
import type { Note, SharpNote, FlatNote } from "../types";

// the guitar string is represented by a row in a table. each cell is a note.
type GuitarStringType = {
  stringNumber: number;
  hoveredNote: Note | undefined;
  setHoveredNote: React.Dispatch<React.SetStateAction<Note | undefined>>;
  currentChordNotes: (SharpNote | FlatNote)[];
  sharpsOrFlats: 'sharps' | 'flats';
  viewSize: number;
}

export default function GuitarString({ stringNumber, hoveredNote, setHoveredNote, currentChordNotes, sharpsOrFlats, viewSize }: GuitarStringType) {
  return (
    <tr>
      <th 
        className={
          `py-1 px-2 text-nowrap border border-black 
          ${(currentChordNotes.includes('E')) && (stringNumber === 1 || stringNumber === 6) ? 'bg-green-400' 
          : (currentChordNotes.includes('B')) && stringNumber === 2 ? 'bg-red-400' 
          : (currentChordNotes.includes('G')) && stringNumber === 3 ? 'bg-indigo-400' 
          : (currentChordNotes.includes('D')) && stringNumber === 4 ? 'bg-yellow-400' 
          : (currentChordNotes.includes('A')) && stringNumber === 5 ? 'bg-fuchsia-400' 
          : 'bg-gray-300'}`
        }
      >
        String {stringNumber}:
      </th>

      {
        Object.values(guitar[stringNumber]).map((note, index) => {
          return (
            <td 
              key={index} 
              onPointerEnter={() => setHoveredNote(note)}
              onPointerLeave={() => setHoveredNote(undefined)}
              className={
                `relative ${viewSize === 1 ? 'size-11' : viewSize === 2 ?'size-12' : viewSize === 3 ? 'size-14' : viewSize === 11} text-center py-1 px-2 border border-black 
                ${(currentChordNotes.includes(note.sharp) || currentChordNotes.includes(note.flat)) 
                  && note.sharp === 'C' 
                  ? 'bg-red-400/75'
                  : (currentChordNotes.includes(note.sharp) || currentChordNotes.includes(note.flat)) 
                  && (note.sharp === 'C#' || note.flat === 'D♭')
                  ? 'bg-orange-300'
                  : (currentChordNotes.includes(note.sharp) || currentChordNotes.includes(note.flat)) 
                  && note.sharp === 'D'
                  ? 'bg-yellow-300'
                  : (currentChordNotes.includes(note.sharp) || currentChordNotes.includes(note.flat)) 
                  && (note.sharp === 'D#' || note.flat === 'E♭')
                  ? 'bg-lime-300'
                  : (currentChordNotes.includes(note.sharp) || currentChordNotes.includes(note.flat)) 
                  && note.sharp === 'E'
                  ? 'bg-green-300'
                  : (currentChordNotes.includes(note.sharp) || currentChordNotes.includes(note.flat)) 
                  && note.sharp === 'F'
                  ? 'bg-teal-300'
                  : (currentChordNotes.includes(note.sharp) || currentChordNotes.includes(note.flat)) 
                  && (note.sharp === 'F#' || note.flat === 'G♭')
                  ? 'bg-sky-300'
                  : (currentChordNotes.includes(note.sharp) || currentChordNotes.includes(note.flat)) 
                  && note.sharp === 'G'
                  ? 'bg-indigo-300'
                  : (currentChordNotes.includes(note.sharp) || currentChordNotes.includes(note.flat)) 
                  && (note.sharp === 'G#' || note.flat === 'A♭')
                  ? 'bg-purple-300'
                  : (currentChordNotes.includes(note.sharp) || currentChordNotes.includes(note.flat)) 
                  && note.sharp === 'A'
                  ? 'bg-fuchsia-400/75'
                  : (currentChordNotes.includes(note.sharp) || currentChordNotes.includes(note.flat)) 
                  && (note.sharp === 'A#' || note.flat === 'B♭')
                  ? 'bg-pink-300'
                  : (currentChordNotes.includes(note.sharp) || currentChordNotes.includes(note.flat)) 
                  && note.sharp === 'B'
                  ? 'bg-rose-400'
                  : ''
                  } 
                `}
            >
              <div className={`
                place-content-center 
                ${hoveredNote && JSON.stringify(hoveredNote) === JSON.stringify(note) 
                  ? `z-20 absolute top-0 left-0 font-extrabold border border-black bg-white/50 rounded-full 
                    ${viewSize === 1 ? 'size-11' : viewSize === 2 ?'size-12' : viewSize === 3 ? 'size-14' : viewSize === 11}` 
                  : ''}
                `}
              >
                {sharpsOrFlats === 'sharps' ? note.sharp : note.flat}
                <sub>{note.octave}</sub>
              </div>
            </td>
          )
        })
      }
    </tr>
  );
}