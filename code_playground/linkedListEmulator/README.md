# Linked List Emulator

An interactive React + Vite playground for demystifying singly linked lists. Experiment with classic operations like `pushFront`, `pushBack`, `insertAt`, and `removeAt`, step through traversal pointer movements, and study the accompanying time-complexity cheatsheet.

## Features

- **Interactive operations:** Add, insert, traverse, and remove nodes while the visual pointers update in real time.
- **Traversal pointer walkthrough:** Step through the list to see how the `next` pointer hops from node to node before reaching `null`.
- **Live status narration:** Every action is accompanied by a plain-language description to reinforce pointer mechanics.
- **Complexity cheat sheet:** Quick reference that compares the Big-O costs of linked-list operations.
- **Reset & clear:** Jump back to the default example list or wipe the structure to start fresh.

## Getting Started

Make sure you have a recent Node.js LTS release (18+) installed. Then:

```powershell
cd c:\Users\clive\CollegeYear2\code_playground\linkedListEmulator
npm install
npm run dev
```

Open the printed local address (default: <http://localhost:5174>) to explore the emulator.

## Build & Preview

```powershell
npm run build
npm run preview
```

`npm run build` outputs a production bundle under `dist/`, and `npm run preview` serves it for a quick smoke test.

## Project Structure

```
linkedListEmulator/
├── index.html
├── package.json
├── public/
│   └── favicon.svg
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   └── components/
│       ├── LinkedListVisualizer.tsx
│       └── NodeCard.tsx
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Next Ideas

- Animate pointer shifts with SVG curved arrows.
- Add doubly linked list toggles with `prev` pointers.
- Provide quizzes or guided challenges using the existing control panel foundation.
