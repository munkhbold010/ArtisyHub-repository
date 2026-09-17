# Validation — 2026-09-17

## Completed

- Angular production build: passed; no budget warnings.
- Initial JavaScript/CSS bundle: 420.24 kB raw, estimated 92.49 kB transferred.
  The supplied baseline was 542.07 kB raw / 114.43 kB transferred.
  Images and fonts are separate from these figures.
- TypeScript compilation for the existing spec files: passed.
- Local source image/font references: all resolved.
- Internal route references: all resolved.
- All 11 page templates have exactly one primary h1.
- Preview HTML: JavaScript syntax parsed successfully with Node.
- Preview HTML: scripts, styles, image data, and CSS font resources embedded.

## Pending

- Visual checks at desktop and mobile widths, keyboard interaction, real
  browser navigation, filter behavior, FAQ behavior, and offline-file runtime.
- Jasmine/Karma execution in a real browser.
- Vercel preview deployment, direct route refresh, and external app-store links.

The cloud browser blocked access to localhost and local file URLs. No alternate
browser surface was used. Automatic approval review rejected Vercel deployment
because the user authorized a redesign but had not authorized publication.
No deployment was created and no production domain was changed.

The delivered preview is the actual Angular production bundle packaged into
one HTML file, not a screenshot or a separate mock implementation.
