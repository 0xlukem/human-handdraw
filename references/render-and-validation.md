# Render and validation

Use the generated project's scripts unless its approved dimensions or composition IDs require a deliberate update.

## Review render

Render `HumanHanddrawPreview` as a silent H.264 MP4. Its dark background exists only to make the overlay visible. Inspect representative frames from the beginning, middle, completion point, and final hold.

## Transparent master

Render `HumanHanddrawOverlay` with PNG frames, ProRes 4444, and an alpha-capable pixel format:

```bash
npm run render:alpha
```

For browser delivery when requested:

```bash
npm run render:webm
```

## Required checks

- TypeScript check succeeds.
- Preview and master have the approved dimensions, frame rate, frame count, and duration.
- The master reports an alpha pixel format such as `yuva444p10le` or `yuva444p12le`.
- There is no audio stream.
- The first frame is empty or matches the approved entrance.
- The final frame contains the complete readable composition.
- No text, arrowhead, circle, underline, or icon is clipped.
- The reading order matches the approved timing sheet.
- The editable source contains no visible SVG `<text>` element or font-rendered lettering.

If `ffprobe` is available, record its codec, dimensions, pixel format, duration, frame count, and stream inventory. Otherwise report that media-level verification remains pending rather than guessing.
