## Vercel MCP Server

This repository contains a Model Context Protocol (MCP) server built with Node.js and TypeScript, designed to run both locally and as a Vercel serverless function.

### Features
- TypeScript support
- Express.js server
- Ready for deployment on Vercel

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/)

### Install Dependencies
```bash
npm install
```

### Running Locally
Start the development server:
```bash
npm run dev
```
The server will start on `http://localhost:3000` by default.

---

## Deploying to Vercel

1. [Install the Vercel CLI](https://vercel.com/docs/cli):
   ```bash
   npm install -g vercel
   ```
2. Log in to your Vercel account:
   ```bash
   vercel login
   ```
3. Deploy the project:
   ```bash
   vercel
   ```
   Follow the prompts to link or create a new Vercel project.

---

## Testing

You can test the API endpoints using tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/).

Example:
```bash
curl http://localhost:3000/
```

---

## Project Structure

- `api/server.ts` — Main server entry point
- `package.json` — Project metadata and scripts
- `tsconfig.json` — TypeScript configuration

---

## License

MIT
