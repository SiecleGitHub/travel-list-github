# Travel List

A polished React travel list app implemented in TypeScript. This project is adapted from a tutorial originally created with plain JavaScript, but has been rewritten for professional quality using TypeScript, React, and modern front-end practices.

## Features

- Add travel destinations with name and estimated packing items
- Track whether trips are packed or pending
- Remove travel entries cleanly
- Display statistics for total trips, packed items, and remaining items
- Built with TypeScript for strong typing and maintainable code

## Tech Stack

- React
- TypeScript
- Create React App / `react-scripts`
- CSS modules for component styling

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm start
```

3. Open the app in your browser

```text
http://localhost:3000
```

## Project Structure

- `src/App.tsx` — main application component
- `src/components/` — reusable UI components
- `src/hooks/useItems.ts` — custom hook for item state management
- `src/types/item-model.ts` — shared TypeScript data model

## Why TypeScript

Using TypeScript improves code reliability by enforcing type safety across components, hooks, and shared models. This helps reduce runtime errors and makes the application easier to maintain and extend.

## Notes

This repository demonstrates how a simple tutorial app can be upgraded from plain JavaScript to a TypeScript-based React codebase while preserving the original travel-list functionality.
