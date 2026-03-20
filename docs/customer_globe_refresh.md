# Customer Globe Refresh

The public Orbit Globe reads from one shipped JSON file:

- `apps/customer-globe/public/data/public-globe.v1.json`

## Refresh Flow

1. Generate a fresh public-safe `public-globe.v1.json` from the private data pipeline.
2. Replace the file in this repo:

   `apps/customer-globe/public/data/public-globe.v1.json`

3. Validate the frontend:

```bash
npm --prefix apps/customer-globe test
npm --prefix apps/customer-globe run build
```

## Public Safety Rule

This repo is for the public globe surface. Keep the shipped dataset and repo contents free of:

- customer names in the public JSON
- serial numbers in the public JSON
- street addresses
- ZIP or postal codes
- raw Odoo notes or internal resolution traces
