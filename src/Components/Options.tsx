import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ViewSize from "./ViewSize";
import SharpFlatToggle from "./SharpFlatToggle";
import BaseNoteSequence from "./BaseNoteSequence";
import ChordScaleSelection from "./ChordScaleSelection";
import type { ChordOptionsType, FlatNote, SharpNote } from "../types";

type OptionsType = {
    setOptionsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    optionsOpen: boolean;
    viewSize: number;
    setViewSize: React.Dispatch<React.SetStateAction<number>>;
    sharpsOrFlats: "sharps" | "flats";
    setSharpsOrFlats: React.Dispatch<React.SetStateAction<"sharps" | "flats">>;
    selectedBaseNote: SharpNote | FlatNote;
    setSelectedBaseNote: React.Dispatch<React.SetStateAction<SharpNote | FlatNote>>;
    setCurrentChord: React.Dispatch<React.SetStateAction<ChordOptionsType>>;
}

export default function Options({ setOptionsOpen, optionsOpen, viewSize, setViewSize, sharpsOrFlats, setSharpsOrFlats, selectedBaseNote, setSelectedBaseNote, setCurrentChord }: OptionsType) {
    return (
        <div className="w-fit">
            <div 
            onClick={() => setOptionsOpen(!optionsOpen)}
            className={`
                flex justify-between items-center gap-4 py-1 px-3 border border-black bg-stone-200 cursor-pointer
                ${optionsOpen ? 'rounded-t-md' : 'rounded-md'}
            `}
            >
            <p className="text-xl font-bold">Options</p>

            {optionsOpen
                ? <FaChevronUp className="text-xl" />
                : <FaChevronDown className="text-xl" />
            }
            </div>

            {optionsOpen &&
            <div className="w-full h-fit px-3 py-4 flex flex-col gap-4 bg-stone-100 rounded-b-md border border-black border-t-0">
                <ViewSize viewSize={viewSize} setViewSize={setViewSize} />

                <SharpFlatToggle
                sharpsOrFlats={sharpsOrFlats}
                setSharpsOrFlats={setSharpsOrFlats}
                />

                <BaseNoteSequence
                selectedBaseNote={selectedBaseNote}
                setSelectedBaseNote={setSelectedBaseNote}
                sharpsOrFlats={sharpsOrFlats}
                />

                <ChordScaleSelection setCurrentChord={setCurrentChord} />
            </div>
            }
        </div>
    )
}