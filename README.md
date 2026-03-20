# Vape-Jet Orbit Globe

Public-facing interactive globe and machine locator for Vape-Jet's installed fleet.

## What This Repo Contains

- `apps/customer-globe/` — Vite + React + TypeScript globe experience

The shipped frontend uses only city/state/country-level disclosure.

## Local Development

Install frontend dependencies and run the app:

```bash
npm --prefix apps/customer-globe install
npm --prefix apps/customer-globe run dev
```

Build the production bundle:

```bash
npm --prefix apps/customer-globe run build
```

## Public Dataset

- `apps/customer-globe/public/data/public-globe.v1.json`

Refresh this file by replacing it with a newly generated public-safe JSON artifact from the private data pipeline.

The public dataset must remain city-level only. Do not add customer names, serial numbers, street addresses, ZIP codes, or raw Odoo notes to the shipped frontend payload.

## Tests

Run the frontend tests:

```bash
npm --prefix apps/customer-globe test
```

## Deploy

`render.yaml` is configured for a static Render deployment rooted at `apps/customer-globe/`.
