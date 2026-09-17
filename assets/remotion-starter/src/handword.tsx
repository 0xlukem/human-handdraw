import {glyphs} from './glyphs';
import {Stroke} from './strokes';

const baseline = [-2, 1, 0, -1, 2, -1, 1, 0];
const slant = [-2, 1, -1, 2, 0, -2, 1, 0];
const spacing = [0, 1, -1, 1, 0, -1, 2, 0];

export const HandWord = ({
  value,
  x,
  y,
  scale = 1,
  start,
  end,
  seed = 0,
  color = '#f7f3e9',
}: {
  value: string;
  x: number;
  y: number;
  scale?: number;
  start: number;
  end: number;
  seed?: number;
  color?: string;
}) => {
  const characters = [...value.toLowerCase()];
  const visible = characters.filter((character) => character !== ' ').length;
  let advance = 0;
  let written = 0;

  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {characters.map((character, index) => {
        const glyph = glyphs[character];
        if (!glyph) throw new Error(`Unsupported hand-drawn glyph: ${character}`);

        const glyphX = advance;
        advance += glyph.advance + spacing[(index + seed) % spacing.length];
        if (character === ' ') return null;

        const letterStart = start + (written / visible) * (end - start);
        const letterEnd = start + ((written + 1) / visible) * (end - start);
        written += 1;

        return (
          <g
            key={`${character}-${index}`}
            transform={`translate(${glyphX} ${baseline[(index + seed) % baseline.length]}) rotate(${slant[(index + seed) % slant.length]} 18 45)`}
          >
            {glyph.strokes.map((stroke, strokeIndex) => (
              <Stroke
                key={strokeIndex}
                d={stroke.d}
                color={color}
                width={stroke.width}
                start={letterStart + (strokeIndex / glyph.strokes.length) * (letterEnd - letterStart)}
                end={letterStart + ((strokeIndex + 1) / glyph.strokes.length) * (letterEnd - letterStart)}
              />
            ))}
          </g>
        );
      })}
    </g>
  );
};
