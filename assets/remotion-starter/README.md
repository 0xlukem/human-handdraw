# Generated human-handdraw project

This project was created from the `human-handdraw` starter. Adapt `src/scene.tsx` only after the user approves the message, layout, reveal order, timing, and visual devices.

- `npm run studio`: inspect both compositions.
- `npm run check`: type-check the source.
- `npm run render:preview`: render the review-only MP4.
- `npm run render:alpha`: render the silent ProRes 4444 master.
- `npm run render:webm`: optionally render a transparent browser asset.

`src/glyphs.ts` contains reusable English and Spanish centerline glyphs. Author custom paths for hero words or missing characters. Keep `HumanHanddrawOverlay` transparent; change only `HumanHanddrawPreview` when a different review background is useful.
