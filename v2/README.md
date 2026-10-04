# ArtisyHub V2 Development

This directory is the isolated V2 workspace.

## Safety
- `main` remains untouched.
- Active development happens on `v2-development`.
- Production deployment is not triggered from this directory unless explicitly approved.

## Target architecture
- Backend: Python + PostgreSQL
- Web: customer-facing web
- Admin: admin dashboard
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
Changes should be made as focused commits. Test builds are produced only when requested.
