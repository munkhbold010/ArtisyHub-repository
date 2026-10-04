# ArtisyHub V2 Development

This directory is the isolated V2 workspace.

## Safety
- `main` remains untouched.
- Active development happens on `v2-development`.
- The V2 Vercel project uses `v2` as its Root Directory.
- The V2 framework preset is Next.js.
- Existing production `artisyhub.mn` remains on the legacy project until a separate migration is explicitly approved.

## Target architecture
- Backend: Python + PostgreSQL
- Web: Next.js + TypeScript
- Admin: Next.js + TypeScript
- Mobile: Flutter
- Integrations: QPay, Khan Bank Corporate Gateway, CallPro
- eBarimt/POSAPI: paused until the current technology company shares its code
- Data migration: paused until the current schema/data is received

## Current finance rule
- Total artist deduction: 5%
- QPay payment: artist 95%, ArtisyHub 4%, QPay 1%
- QPay 1% is deducted before settlement reaches the collection account
- Direct bank payment: artist 95%, ArtisyHub 5%

## Workflow
Changes are made as focused commits on `v2-development`. Vercel deploys that branch to the separate V2 project for review.
