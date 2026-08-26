# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.



github repository links

https://github.com/sriram1022/shoppable-video-analytics-dashboard
https://github.com/sriram1022/sriramkorla10-ME_BUILDOUT_QTIFY_V2
https://github.com/sriram1022/xintrosection
https://github.com/sriram1022/multistepform
https://github.com/sriram1022/xordersummary
https://github.com/sriram1022/nft-preview-card
https://github.com/sriram1022/sriramkorla10-ME_QKART_FRONTEND_V2
https://github.com/sriram1022/sriramkorla10-ME_QTRIPDYNAMIC
https://github.com/sriram1022/devTinder

-----------------------------------------------------------------------------
explaining why i am a strong candidate for this position.

https://youtube.com/shorts/07FW7GxyOJM?si=RAG9DMW3KYdlPLLG


-------------------------------------------------------------------------

VEDIO EXPLANATION ON THE PROJECT

https://youtu.be/v1lZzISji-8?si=v5bsMHtZjdHoqryz--clientside
https://youtu.be/1CIc-8zI-hY?si=8LtW41nrcYofApdO--serverside 


------------------------------------------------------------------------
## React Compiler

# Shoppable Video Analytics Dashboard

A React and Vite dashboard backed by an Express API and SQLite database. The dashboard displays video views, clicks, add-to-cart events, conversion rates, pagination, and a control for simulating traffic.

## Prerequisites

- Node.js 18 or newer
- npm (included with Node.js)

Check your installed versions:

```bash
node --version
npm --version
```

## Project Structure

```text
client/   React + Vite frontend
server/   Express API
server/database/   SQLite schema, initialization, seed scripts, and database file
```

## Installation

From the repository root, install dependencies for both applications:

```bash
cd server
npm install

cd ../client
npm install
```

## Initialize and Seed the Database

Run these commands from the `server` directory. Database initialization creates the SQLite tables in `server/database/database.db`. Seeding inserts the sample products, videos, and engagement events used by the dashboard.

```bash
cd server
npm run db:init
npm run db:seed
```

Run `db:init` before `db:seed` on a fresh checkout. The schema uses `CREATE TABLE IF NOT EXISTS`, so initialization is safe to run again. The seed script inserts additional rows each time it runs; avoid rerunning it unless you want duplicate sample data.

## Run Locally

Use two terminals from the repository root.

### Terminal 1: Start the API

```bash
cd server
npm run dev
```

The API starts at [http://localhost:5000](http://localhost:5000). You can verify it is running by opening that URL; it should return:

```json
{"message":"Shoppable Video Analytics API is running"}
```

For a production-style Node process, use `npm start` instead of `npm run dev`.

### Terminal 2: Start the Frontend

```bash
cd client
npm run dev
```

Open the URL printed by Vite, normally [http://localhost:5173](http://localhost:5173).

The frontend expects the API at `http://localhost:5000/api`, so keep the server running while using the dashboard.

## Useful Commands

Run from `client`:

```bash
npm run dev       # Start Vite with hot reload
npm run build     # Create a production build
npm run preview   # Preview the production build
npm run lint      # Run Oxlint
```

Run from `server`:

```bash
npm run dev       # Start Express with Nodemon
npm start         # Start Express with Node
npm run db:init   # Create SQLite tables
npm run db:seed   # Insert sample data
```

## API Endpoints

- `GET /` - API health check
- `GET /api/analytics/videos?page=1&limit=5` - Paginated video analytics
- `POST /api/events` - Add an event using `{ "videoId": 1, "eventType": "view" }`

Valid event types are `view`, `click`, and `add_to_cart`.

## Troubleshooting

- If `npm dev run` fails, use the correct npm syntax: `npm run dev`.
- If the dashboard shows a failed analytics request, confirm the API terminal is running on port 5000 and that the database has been initialized and seeded.
- If port 5000 or 5173 is already in use, stop the existing process or change the port configuration and update the frontend API URL accordingly.
- If the database is accidentally seeded multiple times, delete `server/database/database.db`, then run `npm run db:init` and `npm run db:seed` again from `server`.



