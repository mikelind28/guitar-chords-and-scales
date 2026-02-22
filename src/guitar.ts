import type { SharpNote, FlatNote, Note, Guitar, GuitarString } from "./types";

// the order notes must go in:
export const NOTE_SEQUENCE: SharpNote[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B' ];

// note equivalents, but flat instead of sharp:
export const SHARP_TO_FLAT_MAP: Record<SharpNote, FlatNote> = {
    'C': 'C',
    'C#': 'D♭',
    'D': 'D',
    'D#': 'E♭',
    'E': 'E',
    'F': 'F',
    'F#': 'G♭',
    'G': 'G',
    'G#': 'A♭',
    'A': 'A',
    'A#': 'B♭',
    'B': 'B',
}

// getNote calculates a note based off of a provided baseNote and the number of semitones to add to it.
function getNote(baseNote: Note, semitones: number): Note {
    // first, find the index of the string's baseNote within NOTE_SEQUENCe.
    const indexOfBase = NOTE_SEQUENCE.indexOf(baseNote.sharp);
    // add a number of semitones to the index of the provided baseNote to calculate what the string's next note will be.
    const nextIndex = indexOfBase + semitones;
    // get the next note's name based off of its index.
    // if its index is 12 or higher, start from the beginning of the NOTE_SEQUENCE by calculating the remainder of its index / 12.
    const nextName = NOTE_SEQUENCE[nextIndex % 12];
    // if its index is 12 or higher, add an octave. if it's 24 or higher, add 2 octaves. etc.
    const octaveShift = Math.floor((indexOfBase + semitones) / 12);
    // return the calculated note.
    return { 
        sharp: nextName,
        flat: SHARP_TO_FLAT_MAP[nextName],
        octave: baseNote.octave + octaveShift 
    };
}

// makeString generates a string based off of a provided openNote and the number of frets to include.
function makeString(openNote: Note, frets = 22): GuitarString {
    // initialize an empty string object to fill.
    const string: GuitarString = {};
    // get a note for each of the frets.
    for (let i = 0; i <= frets; i++) {
        // at the string's key 0, find the provided openNote and add 0 semitones.
        // at key 1, find the openNote, but add 1 semitone.
        // etc.
        string[i] = getNote(openNote, i);
    }
    // return the generated string object.
    return string;
}

// standard guitar tuning. 6 is the lowest string; 1 is the highest.
export const guitar: Guitar = {
    6: makeString({ sharp: 'E', flat: 'E', octave: 2 }),
    5: makeString({ sharp: 'A', flat: 'A', octave: 2 }),
    4: makeString({ sharp: 'D', flat: 'D', octave: 3 }),
    3: makeString({ sharp: 'G', flat: 'G', octave: 3 }),
    2: makeString({ sharp: 'B', flat: 'B', octave: 3 }),
    1: makeString({ sharp: 'E', flat: 'A', octave: 4 }),
}
