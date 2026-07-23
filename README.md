# Cambridge Global School

This Monorepo for the Cambridge Global School marketing site and its supporting Express API.

## Workspace overview

- `artifacts/cambridge-montessori` contains the Vite + React frontend for the school website.
- `artifacts/api-server` contains the Express API.
- `lib/api-spec` contains the OpenAPI contract.
- `lib/api-client-react` contains generated frontend API client code.
- `lib/api-zod` contains generated Zod schemas shared by the API.
- `db` contains the shared database package and schema.

## Tech stack

- pnpm workspaces
- TypeScript 5
- React 19 + Vite
- Express 5
- Zod
- Drizzle ORM

## Getting started

### Prerequisites

- Node.js
- pnpm

### Install dependencies

```powershell
pnpm install
```

## Common commands

### Run the frontend

```powershell
pnpm --filter @workspace/cambridge-montessori run dev
```

### Build the frontend

```powershell
pnpm --filter @workspace/cambridge-montessori run build
```

### Build the API

```powershell
pnpm --filter @workspace/api-server run build
```

### Start the API

The API bootstrap expects the `PORT` environment variable.

```powershell
$env:PORT = "5000"
pnpm --filter @workspace/api-server run start
```

### Typecheck the workspace

```powershell
pnpm run typecheck
```

### Build everything

```powershell
pnpm run build
```

## API details

- Express routes are mounted under `/api`.
- Health check endpoint: `/api/healthz`
- Local bootstrap entry: `artifacts/api-server/src/index.ts`
- App entry used for serverless hosting: `artifacts/api-server/src/app.ts`

## Deployment note

- Deploy from repository root only.
- Use the single root Vercel config in `vercel.json`.
- Frontend output is served from `artifacts/cambridge-montessori/dist/public`.
- Backend runs as Vercel Functions from `api/index.js` and `api/[...path].js`, loading the API bundle at `artifacts/api-server/dist/index.mjs`.