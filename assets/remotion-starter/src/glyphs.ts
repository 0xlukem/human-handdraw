export type GlyphStroke = {d: string; width?: number};
export type Glyph = {advance: number; strokes: GlyphStroke[]};

const base: Record<string, Glyph> = {
  a: {
    advance: 42,
    strokes: [
      {d: 'M 31 29 C 22 20 6 25 6 43 C 6 59 22 68 34 54 C 40 46 36 31 31 29', width: 6.4},
      {d: 'M 34 31 C 33 45 35 60 40 64', width: 5.9},
    ],
  },
  b: {
    advance: 42,
    strokes: [
      {d: 'M 9 5 C 7 26 7 47 10 66', width: 6.2},
      {d: 'M 11 39 C 18 21 36 26 37 44 C 38 61 22 70 10 57', width: 6.5},
    ],
  },
  c: {advance: 38, strokes: [{d: 'M 33 30 C 22 21 7 28 6 45 C 5 61 22 69 34 59', width: 6.2}]},
  d: {
    advance: 42,
    strokes: [
      {d: 'M 31 30 C 21 21 6 27 6 44 C 7 60 23 69 34 54 C 39 47 35 32 31 30', width: 6.4},
      {d: 'M 36 4 C 33 25 34 48 39 65', width: 6.0},
    ],
  },
  e: {advance: 39, strokes: [{d: 'M 7 47 C 19 42 32 33 26 27 C 16 21 6 31 7 45 C 7 61 22 68 35 59', width: 6.2}]},
  f: {
    advance: 34,
    strokes: [
      {d: 'M 29 8 C 17 1 14 18 17 42 C 20 68 17 80 8 77', width: 6.2},
      {d: 'M 5 29 Q 20 26 32 29', width: 5.7},
    ],
  },
  g: {
    advance: 42,
    strokes: [
      {d: 'M 31 29 C 21 21 6 27 6 44 C 7 60 23 67 34 54', width: 6.4},
      {d: 'M 35 29 C 34 52 37 68 31 80 C 24 92 10 87 8 80', width: 6.1},
    ],
  },
  h: {
    advance: 42,
    strokes: [
      {d: 'M 8 5 C 7 29 6 49 9 65', width: 6.1},
      {d: 'M 10 43 C 17 23 31 24 34 40 Q 35 54 39 65', width: 6.4},
    ],
  },
  i: {
    advance: 21,
    strokes: [
      {d: 'M 12 25 Q 15 45 12 65', width: 6.0},
      {d: 'M 15 8 Q 16 6 16 5', width: 7.0},
    ],
  },
  j: {
    advance: 27,
    strokes: [
      {d: 'M 17 25 C 19 48 18 73 8 82 C 3 86 1 82 2 77', width: 6.1},
      {d: 'M 18 8 Q 19 6 19 5', width: 7.0},
    ],
  },
  k: {
    advance: 40,
    strokes: [
      {d: 'M 8 5 C 7 27 6 49 9 65', width: 6.2},
      {d: 'M 35 26 Q 21 41 10 49', width: 6.0},
      {d: 'M 20 42 Q 29 54 38 65', width: 6.0},
    ],
  },
  l: {advance: 23, strokes: [{d: 'M 15 5 C 13 29 11 49 15 65', width: 6.2}]},
  m: {
    advance: 57,
    strokes: [
      {d: 'M 6 26 Q 10 47 7 65', width: 6.0},
      {d: 'M 9 43 C 16 22 27 24 29 41 Q 29 54 32 65', width: 6.2},
      {d: 'M 31 42 C 38 23 49 25 51 41 Q 51 55 55 65', width: 6.2},
    ],
  },
  n: {
    advance: 41,
    strokes: [
      {d: 'M 6 26 Q 10 47 7 65', width: 6.0},
      {d: 'M 9 43 C 16 22 30 23 33 40 Q 34 55 38 65', width: 6.4},
    ],
  },
  o: {advance: 41, strokes: [{d: 'M 29 28 C 17 20 6 29 6 44 C 7 60 21 69 31 58 C 41 47 38 34 29 28', width: 6.5}]},
  p: {
    advance: 42,
    strokes: [
      {d: 'M 7 27 C 10 47 8 67 6 84', width: 6.1},
      {d: 'M 10 40 C 17 22 36 27 37 44 C 38 59 23 68 10 56', width: 6.5},
    ],
  },
  q: {
    advance: 43,
    strokes: [
      {d: 'M 31 29 C 21 21 6 27 6 44 C 7 60 23 68 34 54', width: 6.4},
      {d: 'M 35 29 C 34 49 37 68 40 84', width: 6.1},
    ],
  },
  r: {
    advance: 34,
    strokes: [
      {d: 'M 6 26 Q 10 47 7 65', width: 6.0},
      {d: 'M 9 43 C 15 27 25 22 33 30', width: 5.9},
    ],
  },
  s: {advance: 38, strokes: [{d: 'M 32 29 C 21 22 8 28 10 39 C 15 49 30 46 30 55 C 30 65 16 69 6 62', width: 6.2}]},
  t: {
    advance: 35,
    strokes: [
      {d: 'M 17 7 C 14 28 13 52 18 65', width: 6.3},
      {d: 'M 4 29 Q 19 26 33 29', width: 5.8},
    ],
  },
  u: {advance: 42, strokes: [{d: 'M 6 26 C 4 46 7 64 18 63 C 29 60 31 42 29 26 C 29 47 32 63 40 64', width: 6.3}]},
  v: {advance: 40, strokes: [{d: 'M 5 27 C 9 43 13 58 20 65 C 27 56 32 42 36 26', width: 6.2}]},
  w: {advance: 49, strokes: [{d: 'M 5 27 C 5 47 10 65 18 63 C 26 60 25 37 24 27 C 24 48 29 65 36 63 C 44 58 46 41 45 27', width: 6.1}]},
  x: {
    advance: 40,
    strokes: [
      {d: 'M 7 27 Q 20 45 35 65', width: 6.1},
      {d: 'M 35 27 Q 22 46 7 65', width: 5.9},
    ],
  },
  y: {advance: 40, strokes: [{d: 'M 6 26 C 7 44 12 63 21 62 C 30 58 32 41 32 26 C 32 56 28 75 15 85', width: 6.1}]},
  z: {advance: 39, strokes: [{d: 'M 6 29 Q 20 25 35 29 Q 21 47 7 64 Q 22 61 36 64', width: 6.1}]},
  ' ': {advance: 27, strokes: []},
  '-': {advance: 31, strokes: [{d: 'M 5 47 Q 17 44 28 47', width: 5.4}]},
  '’': {advance: 13, strokes: [{d: 'M 9 9 Q 8 18 5 24', width: 5.8}]},
  "'": {advance: 13, strokes: [{d: 'M 9 9 Q 8 18 5 24', width: 5.8}]},
  '!': {
    advance: 22,
    strokes: [
      {d: 'M 13 8 Q 10 35 13 51', width: 6.2},
      {d: 'M 13 65 Q 14 64 14 63', width: 7.0},
    ],
  },
  '?': {
    advance: 39,
    strokes: [
      {d: 'M 7 18 C 12 5 34 6 35 20 C 36 32 21 36 20 47', width: 6.1},
      {d: 'M 20 64 Q 21 63 21 62', width: 7.0},
    ],
  },
};

const accented = (character: string, accent: GlyphStroke): Glyph => ({
  ...base[character],
  strokes: [...base[character].strokes, accent],
});

export const glyphs: Record<string, Glyph> = {
  ...base,
  á: accented('a', {d: 'M 18 17 Q 25 9 30 5', width: 5.2}),
  é: accented('e', {d: 'M 17 17 Q 24 9 29 5', width: 5.2}),
  í: accented('i', {d: 'M 8 17 Q 14 9 19 5', width: 5.2}),
  ó: accented('o', {d: 'M 18 17 Q 25 9 30 5', width: 5.2}),
  ú: accented('u', {d: 'M 18 17 Q 25 9 30 5', width: 5.2}),
  ü: {
    ...base.u,
    strokes: [...base.u.strokes, {d: 'M 14 11 L 14 10 M 29 11 L 29 10', width: 6.5}],
  },
  ñ: {
    ...base.n,
    strokes: [...base.n.strokes, {d: 'M 10 16 C 16 8 22 21 31 13', width: 4.8}],
  },
  '¿': {
    advance: 39,
    strokes: [
      {d: 'M 20 13 Q 21 12 21 11', width: 7.0},
      {d: 'M 21 28 C 20 40 5 43 6 57 C 7 71 29 72 35 59', width: 6.1},
    ],
  },
  '¡': {
    advance: 22,
    strokes: [
      {d: 'M 13 10 Q 14 9 14 8', width: 7.0},
      {d: 'M 13 23 Q 10 49 13 65', width: 6.2},
    ],
  },
};
