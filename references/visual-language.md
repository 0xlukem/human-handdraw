# Visual language

## Authored hand

Use progressively revealed SVG centerlines. Ordinary copy may reuse the bundled glyph library, with fixed per-character changes in baseline, slant, and spacing. Hero words and unsupported glyphs should receive custom centerline paths.

The result should feel raw but intentional:

- curves miss mathematical perfection by a small, fixed amount;
- repeated elements differ slightly;
- line weight varies between related strokes;
- imperfections are deterministic and stable across frames;
- every word remains readable at delivery resolution.

Use no SVG `<text>`, CSS font, handwriting font, or rasterized typography for visible lettering.

## Visual vocabulary

- Arrows: long enough to express a relationship, with loose two-stroke `>` heads.
- Underlines: two or three neighboring paths for strong emphasis; one uneven path for light emphasis.
- Circles: an open or imperfect loop, often completed after the word.
- Icons: basic centerline doodles only when they shorten or clarify the message.
- Concept maps: connections should encode reading direction, not merely decorate empty space.

## Choreography

Write and draw in the order the idea should be understood. Reveal a concept before its outgoing relationship and reveal a destination after the connecting stroke reaches it. Avoid simultaneous motion that competes for the same attention.

Use frame-driven Remotion animation (`useCurrentFrame()`, `interpolate()`, or springs), never CSS animation or time-based randomness. A stroke should accelerate gently, settle naturally, and remain visible unless the approved story calls for erasure.

Finish the meaningful drawing before the final 20–30% reading hold. Keep the completed composition still enough to read; subtle motion is optional, not a requirement.

## Composition

Treat the b-roll as the background even when it is unavailable. Use deliberate negative space, respect safe margins, and avoid placing critical copy where a face, hands, interface, or platform controls are expected. The preview background is a visibility aid, not part of the final artwork.
