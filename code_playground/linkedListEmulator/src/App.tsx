import LinkedListVisualizer from "./components/LinkedListVisualizer";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Linked List Emulator</h1>
        <p>
          Build intuition for singly linked lists through interactive operations,
          live pointer animations, and annotated walkthroughs.
        </p>
      </header>
      <main className="app__main">
        <LinkedListVisualizer />
      </main>
      <footer className="app__footer">
        <p>
          Tip: Linked lists shine when you often insert or remove nodes in the
          middle of a large sequence. Try simulating those scenarios below!
        </p>
      </footer>
    </div>
  );
}

export default App;
