import "./App.css";
import { useEffect, useState } from "react";
import { NOTE_SEQUENCE, SHARP_TO_FLAT_MAP } from "./guitar";
import Fretboard from "./Components/Fretboard";
import type { FlatNote, SharpNote, Note, ChordOptionsType } from "./types";
import Options from "./Components/Options";
// import Piano from './Components/Piano';

function App() {
  const [optionsOpen, setOptionsOpen] = useState(true);

  // when hovering over a note, every identical note on the fretboard is highlighted.
  const [hoveredNote, setHoveredNote] = useState<Note | undefined>(undefined);

  // choose whether to display notes as sharps or flats.
  const [sharpsOrFlats, setSharpsOrFlats] = useState<"sharps" | "flats">("sharps");

  // the selectedBaseNote will determine which chord is highlighted on the fretboard.
  const [selectedBaseNote, setSelectedBaseNote] = useState<SharpNote | FlatNote>("E");

  const [currentChord, setCurrentChord] = useState<ChordOptionsType>("major-chord");

  const [currentChordNotes, setCurrentChordNotes] = useState<
    (SharpNote | FlatNote)[]
  >(["E", "G#", "B"]);

  const [viewSize, setViewSize] = useState(1);

  const majorChord: number[] = [4, 7];
  const minorChord: number[] = [3, 7];
  const dominantSeventhChord: number[] = [4, 7, 10];
  const majorSeventhChord: number[] = [4, 7, 11];
  const chromaticScale: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const majorScale: number[] = [0, 2, 4, 5, 7, 9, 11];
  const naturalMinorScale: number[] = [0, 2, 3, 5, 7, 8, 10];
  const harmonicMinorScale: number[] = [0, 2, 3, 5, 7, 8, 11];
  const bluesScale: number[] = [0, 3, 5, 6, 7, 10];

  function makeChordWithSharps(baseNote: SharpNote, currentChord: number[]) {
    // initialize the chord array that will be returned.
    const chord: SharpNote[] = [];

    // the first note in the chord will always be the provided baseNote.
    chord[0] = baseNote;

    // find the index of the provided baseNote.
    const baseIndex = NOTE_SEQUENCE.indexOf(baseNote);

    // use the provided currentChord array to determine the next notes in the chord.
    for (const interval of currentChord) {
      const nextIndex = (baseIndex + interval) % 12;
      const nextNote = NOTE_SEQUENCE[nextIndex];
      chord.push(nextNote);
    }

    setCurrentChordNotes(chord);
  }

  function makeChordWithFlats(baseNote: FlatNote, currentChord: number[]) {
    // initialize the chord array that will be returned.
    const chord: FlatNote[] = [];

    // the first note in the chord will always be the provided baseNote.
    chord[0] = baseNote;

    // convert the provided baseNote to sharp to find its index.
    const valuesArray = Object.values(SHARP_TO_FLAT_MAP);

    // find the index of the provided baseNote.
    const baseIndex = valuesArray.indexOf(baseNote);

    // use the provided currentChord array to determine the next notes in the chord.
    for (const interval of currentChord) {
      const nextIndex = (baseIndex + interval) % 12;
      const nextNote = NOTE_SEQUENCE[nextIndex];
      const nextNoteAsFlat = SHARP_TO_FLAT_MAP[nextNote];
      chord.push(nextNoteAsFlat);
    }

    setCurrentChordNotes(chord);
  }

  // if a user has selected a sharp note as their selectedBaseNote, and then changes the mode to show Flats, (or vice versa), convert the selectedBaseNote to its opposite sign.
  useEffect(() => {
    if (sharpsOrFlats === "sharps") {
      const convertedToSharp = NOTE_SEQUENCE.find(
        (sharpNote) => SHARP_TO_FLAT_MAP[sharpNote] === selectedBaseNote,
      );

      if (convertedToSharp) {
        setSelectedBaseNote(convertedToSharp);
      }
    }

    if (sharpsOrFlats === "flats") {
      const convertedToFlat = SHARP_TO_FLAT_MAP[selectedBaseNote as SharpNote];

      setSelectedBaseNote(convertedToFlat);
    }
  }, [sharpsOrFlats]);

  useEffect(() => {
    let chordToUse: number[];

    switch (currentChord) {
      case "major-chord":
        chordToUse = majorChord;
        break;
      case "minor-chord":
        chordToUse = minorChord;
        break;
      case "dominant-seventh-chord":
        chordToUse = dominantSeventhChord;
        break;
      case "major-seventh-chord":
        chordToUse = majorSeventhChord;
        break;
      case "chromatic-scale":
        chordToUse = chromaticScale;
        break;
      case "major-scale":
        chordToUse = majorScale;
        break;
      case "natural-minor-scale":
        chordToUse = naturalMinorScale;
        break;
      case "harmonic-minor-scale":
        chordToUse = harmonicMinorScale;
        break;
      case "blues-scale":
        chordToUse = bluesScale;
        break;
      default:
        chordToUse = majorChord;
    }

    if (sharpsOrFlats === "sharps") {
      makeChordWithSharps(selectedBaseNote as SharpNote, chordToUse);
    }

    if (sharpsOrFlats === "flats") {
      makeChordWithFlats(selectedBaseNote as FlatNote, chordToUse);
    }
  }, [sharpsOrFlats, selectedBaseNote, currentChord]);

  return (
    <main className="p-2 flex flex-col gap-4">
      <Options 
        setOptionsOpen={setOptionsOpen} 
        optionsOpen={optionsOpen} 
        viewSize={viewSize} 
        setViewSize={setViewSize} 
        sharpsOrFlats={sharpsOrFlats} 
        setSharpsOrFlats={setSharpsOrFlats} 
        selectedBaseNote={selectedBaseNote} 
        setSelectedBaseNote={setSelectedBaseNote} 
        setCurrentChord={setCurrentChord} 
      />

      <div className="max-w-[100vw] overflow-x-scroll">
        <Fretboard
          viewSize={viewSize}
          hoveredNote={hoveredNote}
          setHoveredNote={setHoveredNote}
          currentChordNotes={currentChordNotes}
          sharpsOrFlats={sharpsOrFlats}
        />

        {/* <Piano /> */}
      </div>
    </main>
  );
}

export default App;
