import { NOTE_SEQUENCE, SHARP_TO_FLAT_MAP } from "../guitar";
import type { SharpNote, FlatNote } from "../types";

// the BaseNote component allows a user to choose a base note for the chord they'd like to highlight on the fretboard.
type BaseNoteType = {
  selectedBaseNote: SharpNote | FlatNote;
  setSelectedBaseNote: React.Dispatch<React.SetStateAction<SharpNote | FlatNote>>;
  textContent?: SharpNote | FlatNote;
  sharpsOrFlats?: 'sharps' | 'flats';
}

function BaseNote({ selectedBaseNote, setSelectedBaseNote, textContent }: BaseNoteType) {
  return (
    <div
      onClick={() => setSelectedBaseNote(textContent as SharpNote | FlatNote)}
      className={`w-12 text-center rounded-sm text-xl ${selectedBaseNote === textContent 
        ? 'bg-yellow-500'
        : 'z-20 bg-stone-300 hover:cursor-pointer'}`}
      style={ selectedBaseNote === textContent 
        ? { boxShadow: 'inset 1px 2px 5px rgb(67 32 4 / 0.75)' }
        : { boxShadow: '1px 2px 3px rgb(0 0 0 / 0.5), inset 2px 2px rgb(255 255 255 / 0.5), inset -1px -1px rgb(0 0 0 / 0.5)' }}
    >
      {textContent}
    </div>
  );
}

export default function BaseNoteSequence({ selectedBaseNote, setSelectedBaseNote, sharpsOrFlats }: BaseNoteType) {
  return (
    <div className='flex bg-gray-700 rounded-sm *:py-1 *:px-2 *:border *:border-gray-600'>
      {
        NOTE_SEQUENCE.map((note, index) => {
          return (
            <BaseNote 
              key={index}
              selectedBaseNote={selectedBaseNote} 
              setSelectedBaseNote={setSelectedBaseNote} 
              textContent={sharpsOrFlats === 'sharps' ? note : SHARP_TO_FLAT_MAP[note]} 
            />
          );
        })
      }
    </div>
  )
}