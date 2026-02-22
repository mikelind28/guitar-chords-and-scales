export type ChordOptionsType =
  | 'major-chord'
  | 'minor-chord'
  | 'dominant-seventh-chord'
  | 'major-seventh-chord'
  | 'chromatic-scale'
  | 'major-scale'
  | 'natural-minor-scale'
  | 'harmonic-minor-scale'
  | 'blues-scale'
;

export type SharpNote = 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | 'B';

export type FlatNote = 'C' | 'D♭' | 'D' | 'E♭' | 'E' | 'F' | 'G♭' | 'G' | 'A♭' | 'A' | 'B♭' | 'B';

export type Note = {
    sharp: SharpNote;
    flat: FlatNote;
    octave: number;
};

// Record<Keys, Type> constructs an object type with keys of Keys and values of Type.
// String = { fretNumber: noteDetails }
export type GuitarString = Record<number, Note>;

// Guitar = { stringNumber: stringDetails }
export type Guitar = Record<number, GuitarString>;