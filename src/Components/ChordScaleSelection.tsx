import type { ChordOptionsType } from "../types";

export default function ChordScaleSelection({
  setCurrentChord,
}: {
  setCurrentChord: React.Dispatch<React.SetStateAction<ChordOptionsType>>;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="chord-or-scale-select" className="text-xl">
        Chord / Scale:
      </label>

      <select
        name="chord-or-scale-select"
        id="chord-or-scale-select"
        onChange={(e) => setCurrentChord(e.target.value as ChordOptionsType)}
        className="border border-gray-600 bg-stone-300 drop-shadow-sm drop-shadow-gray-900/66 text-xl"
      >
        <optgroup label="Chords">
          <option value="major-chord">Major Chord</option>

          <option value="minor-chord">Minor Chord</option>

          <option value="dominant-seventh-chord">Dominant Seventh Chord</option>

          <option value="major-seventh-chord">Major Seventh Chord</option>
        </optgroup>

        <optgroup label="Scales">
          <option value="chromatic-scale">Chromatic Scale</option>

          <option value="major-scale">Major Scale</option>

          <option value="natural-minor-scale">Natural Minor Scale</option>

          <option value="harmonic-minor-scale">Harmonic Minor Scale</option>

          <option value="blues-scale">Blues Scale</option>
        </optgroup>
      </select>
    </div>
  );
}
