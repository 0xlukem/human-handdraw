---
name: human-handdraw
description: Plan and create transparent, silent Remotion overlays with vector handwriting, arrows, annotations, raw doodles, conceptual diagrams, or mind maps. Use for hand-drawn animated assets that will be composited over video, not full-background motion graphics or caption systems.
license: MIT
---

# Human Handdraw

Create one independent Remotion project per overlay from the bundled starter. Preserve a raw, authored hand: controlled imperfections, human spacing, and readable choreography without SVG text or font-rendered lettering.

This workflow requires Node.js, npm, and an environment capable of running Remotion and Chromium.

## Workflow

1. Read [references/brief-and-approval.md](references/brief-and-approval.md).
2. Ask for every missing brief decision. Always ask which language the visible copy should use, even when the conversation suggests one.
3. If the user gives a topic rather than final copy, research factual claims from primary sources and propose concise wording and relationships.
4. Present the approval packet defined in the brief reference. Wait for explicit approval before creating or editing a Remotion project.
5. After approval, create a clean project by running `node scripts/create-project.mjs <target-directory> <project-slug>` from this skill directory. Never edit the starter in place.
6. Read [references/visual-language.md](references/visual-language.md), then adapt the generated composition. Use reusable centerline glyphs for ordinary copy and authored custom SVG paths for hero words or missing glyphs.
7. Render the review MP4 first. Show it to the user and iterate until the visual sequence is approved.
8. After preview approval, read [references/render-and-validation.md](references/render-and-validation.md), render the transparent master, and verify every listed invariant.

## Deliverable contract

- The transparent, silent overlay is the primary deliverable.
- The opaque MP4 exists only for review.
- Include the independent editable Remotion source.
- ProRes 4444 is the default transparent master. Add transparent WebM only when requested.
- Testing over supplied b-roll is optional and never replaces the transparent master.

Treat plan approval, preview approval, installation, repository publication, and other external mutations as separate authorization boundaries.
