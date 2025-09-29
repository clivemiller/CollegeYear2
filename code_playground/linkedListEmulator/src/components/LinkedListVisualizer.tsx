import { useEffect, useMemo, useRef, useState } from "react";
import NodeCard from "./NodeCard";

type ListNode = {
  id: number;
  value: string;
};

type ComplexityItem = {
  label: string;
  cost: string;
  description: string;
};

const INITIAL_NODES: ListNode[] = [
  { id: 1, value: "8" },
  { id: 2, value: "3" },
  { id: 3, value: "12" }
];

const COMPLEXITY_GUIDE: ComplexityItem[] = [
  {
    label: "pushFront / pushBack",
    cost: "O(1)",
    description: "We re-wire a single pointer when we already track the head/tail."
  },
  {
    label: "insertAt(i)",
    cost: "O(n)",
    description: "We must traverse node-by-node to index i-1 before linking the new node."
  },
  {
    label: "removeAt(i)",
    cost: "O(n)",
    description: "We first find the previous node, then bypass the removed node."
  },
  {
    label: "search(value)",
    cost: "O(n)",
    description: "Without indexes we examine each node sequentially until we match."
  }
];

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const LinkedListVisualizer = () => {
  const [nodes, setNodes] = useState<ListNode[]>(INITIAL_NODES);
  const [inputValue, setInputValue] = useState("42");
  const [indexValue, setIndexValue] = useState("1");
  const [pointerIndex, setPointerIndex] = useState<number>(INITIAL_NODES.length ? 0 : -1);
  const [highlightedNodeId, setHighlightedNodeId] = useState<number | null>(
    INITIAL_NODES[0]?.id ?? null
  );
  const [statusMessage, setStatusMessage] = useState(
    "Head points to the first node. Follow next pointers until you hit null."
  );
  const [history, setHistory] = useState<string[]>([
    "Initialized list with nodes [8 → 3 → 12]."
  ]);

  const idRef = useRef(INITIAL_NODES.length + 1);

  useEffect(() => {
    if (highlightedNodeId === null) {
      return;
    }
    const timeout = window.setTimeout(() => setHighlightedNodeId(null), 1400);
    return () => window.clearTimeout(timeout);
  }, [highlightedNodeId]);

  useEffect(() => {
    if (!nodes.length) {
      setPointerIndex(-1);
      return;
    }

    setPointerIndex((previous) => {
      if (previous < 0) {
        return 0;
      }
      return Math.min(previous, nodes.length - 1);
    });
  }, [nodes.length]);

  const tailLabel = useMemo(() => {
    if (!nodes.length) {
      return "null";
    }
    const tail = nodes[nodes.length - 1];
    return tail ? `Node ${nodes.length - 1} (${tail.value})` : "null";
  }, [nodes]);

  const registerHistory = (entry: string) => {
    setHistory((previous) => [entry, ...previous].slice(0, 8));
  };

  const ensureValue = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) {
      setStatusMessage("Provide a node value first. Strings or numbers both work!");
      return null;
    }
    return trimmed;
  };

  const parseIndex = (limit: number, allowEqualToLimit = false) => {
    const numeric = Number(indexValue);
    if (Number.isNaN(numeric)) {
      setStatusMessage("Index must be a whole number (0-based).");
      return null;
    }
    const clamped = clamp(Math.floor(numeric), 0, allowEqualToLimit ? limit : limit - 1);
    return clamped;
  };

  const handlePushFront = () => {
    const value = ensureValue();
    if (!value) {
      return;
    }

    setNodes((previous) => {
      const newNode: ListNode = { id: idRef.current++, value };
      const updated = [newNode, ...previous];
      setHighlightedNodeId(newNode.id);
      setPointerIndex(0);
      setStatusMessage(
        `pushFront: inserted ${value} at the head by re-pointing head → newNode (cost O(1)).`
      );
      registerHistory(`pushFront(${value}) added a new head node.`);
      return updated;
    });
  };

  const handlePushBack = () => {
    const value = ensureValue();
    if (!value) {
      return;
    }

    setNodes((previous) => {
      const newNode: ListNode = { id: idRef.current++, value };
      const updated = [...previous, newNode];
      setHighlightedNodeId(newNode.id);
      setPointerIndex(previous.length ? previous.length : 0);
      setStatusMessage(
        `pushBack: appended ${value} after the former tail (cost O(1) when tail is tracked).`
      );
      registerHistory(`pushBack(${value}) appended to the tail.`);
      return updated;
    });
  };

  const handleInsertAt = () => {
    if (!nodes.length) {
      setStatusMessage(
        "List is empty. pushFront or pushBack first, or insert at index 0 to create a node."
      );
    }

    const value = ensureValue();
    if (!value) {
      return;
    }

    const index = parseIndex(nodes.length, true);
    if (index === null) {
      return;
    }

    setNodes((previous) => {
      const newNode: ListNode = { id: idRef.current++, value };
      const boundedIndex = clamp(index, 0, previous.length);
      const updated = [...previous];
      updated.splice(boundedIndex, 0, newNode);
      setHighlightedNodeId(newNode.id);
      setPointerIndex(boundedIndex);
      setStatusMessage(
        `insertAt(${boundedIndex}): traversed to node ${boundedIndex - 1} and rewired pointers to include ${value} (cost O(n)).`
      );
      registerHistory(`insertAt(${boundedIndex}, ${value}) inserted before node ${boundedIndex}.`);
      return updated;
    });
  };

  const handleRemoveAt = () => {
    if (!nodes.length) {
      setStatusMessage("List is empty — nothing to remove.");
      return;
    }

    const index = parseIndex(nodes.length, false);
    if (index === null) {
      return;
    }

    setNodes((previous) => {
      const boundedIndex = clamp(index, 0, previous.length - 1);
      const updated = [...previous];
      const [removed] = updated.splice(boundedIndex, 1);

      if (!removed) {
        setStatusMessage("Index out of range — no node removed.");
        return previous;
      }

      const newPointerIndex = updated.length
        ? Math.min(boundedIndex, updated.length - 1)
        : -1;

      const pointerNodeId =
        newPointerIndex >= 0 ? updated[newPointerIndex]?.id ?? null : null;

      setHighlightedNodeId(pointerNodeId ?? null);
      setPointerIndex(newPointerIndex);
      setStatusMessage(
        `removeAt(${boundedIndex}): bypassed node ${removed.value} by linking its predecessor to its successor (cost O(n)).`
      );
      registerHistory(`removeAt(${boundedIndex}) removed node holding ${removed.value}.`);
      return updated;
    });
  };

  const handleTraverse = () => {
    if (!nodes.length) {
      setStatusMessage("Traversal stops immediately because head is null.");
      registerHistory("Traversal attempted on an empty list (head = null).");
      setPointerIndex(-1);
      return;
    }

    if (pointerIndex === -1) {
      setPointerIndex(0);
      setHighlightedNodeId(nodes[0].id);
      setStatusMessage(`Pointer moved to head node with value ${nodes[0].value}.`);
      registerHistory(`Traversal started at head (${nodes[0].value}).`);
      return;
    }

    if (pointerIndex >= nodes.length - 1) {
      setPointerIndex(-1);
      setStatusMessage(
        "Pointer advanced past the tail — we've reached null. Traversal resets on next step."
      );
      registerHistory("Traversal reached null (end of list).");
      return;
    }

    const nextIndex = pointerIndex + 1;
    setPointerIndex(nextIndex);
    setHighlightedNodeId(nodes[nextIndex].id);
    setStatusMessage(`Pointer advanced to node ${nextIndex} with value ${nodes[nextIndex].value}.`);
    registerHistory(`Traversal moved to value ${nodes[nextIndex].value}.`);
  };

  const handleReset = () => {
    setNodes(INITIAL_NODES);
    setHighlightedNodeId(INITIAL_NODES[0]?.id ?? null);
    setPointerIndex(INITIAL_NODES.length ? 0 : -1);
    setStatusMessage("State reset to the original list.");
    registerHistory("Visualizer reset to initial example list.");
    setInputValue("42");
    setIndexValue("1");
  };

  const handleClear = () => {
    setNodes([]);
    setPointerIndex(-1);
    setHighlightedNodeId(null);
    setStatusMessage("Every node now points to null. The list is empty.");
    registerHistory("Cleared the entire list (head now equals null).");
  };

  return (
    <section className="visualizer">
      <div className="visualizer__controls">
        <div className="control-group">
          <label htmlFor="node-value">Node value</label>
          <input
            id="node-value"
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="e.g. 17"
          />
        </div>
        <div className="control-group">
          <label htmlFor="node-index">Index (0-based)</label>
          <input
            id="node-index"
            type="number"
            value={indexValue}
            onChange={(event) => setIndexValue(event.target.value)}
            min={0}
            step={1}
          />
        </div>
        <div className="visualizer__buttons">
          <button type="button" onClick={handlePushFront}>
            pushFront
          </button>
          <button type="button" onClick={handlePushBack}>
            pushBack
          </button>
          <button type="button" onClick={handleInsertAt}>
            insertAt(index)
          </button>
          <button type="button" onClick={handleRemoveAt}>
            removeAt(index)
          </button>
          <button type="button" onClick={handleTraverse}>
            traverse next ➜
          </button>
          <button type="button" onClick={handleReset}>
            reset example
          </button>
          <button type="button" onClick={handleClear} className="warn">
            clear list
          </button>
        </div>
      </div>

      <div className="visualizer__status">
        <h2>Status</h2>
        <p>{statusMessage}</p>
      </div>

      <div className="visualizer__list" aria-live="polite">
        {nodes.map((node, index) => (
          <div className="visualizer__node" key={node.id}>
            <NodeCard
              value={node.value}
              index={index}
              isHead={index === 0}
              isTail={index === nodes.length - 1}
              isPointer={pointerIndex === index}
              highlighted={highlightedNodeId === node.id}
            />
            {index < nodes.length - 1 && <div className="visualizer__arrow" aria-hidden="true">next</div>}
          </div>
        ))}
        {!nodes.length && <div className="visualizer__empty">head → null</div>}
      </div>

      <div className="visualizer__insights">
        <div className="visualizer__card">
          <h3>Pointer snapshot</h3>
          <ul>
            <li>
              head ➜ {nodes.length ? `Node 0 (${nodes[0].value})` : "null"}
            </li>
            <li>tail ➜ {tailLabel}</li>
            <li>
              traversal pointer ➜
              {pointerIndex === -1 || !nodes.length
                ? "null"
                : `Node ${pointerIndex} (${nodes[pointerIndex].value})`}
            </li>
          </ul>
        </div>
        <div className="visualizer__card">
          <h3>Recent operations</h3>
          <ol>
            {history.map((entry, index) => (
              <li key={`${entry}-${index}`}>{entry}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="visualizer__complexity">
        <h3>Time costs at a glance</h3>
        <p>
          Linked lists trade direct indexing for lightning-fast pointer updates. Compare how
          operations scale as the list grows:
        </p>
        <div className="visualizer__complexity-grid">
          {COMPLEXITY_GUIDE.map((item) => (
            <article className="complexity-card" key={item.label}>
              <header>
                <span>{item.label}</span>
                <strong>{item.cost}</strong>
              </header>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedListVisualizer;