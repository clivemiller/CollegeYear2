import { memo } from "react";

type NodeCardProps = {
  value: string;
  index: number;
  isHead: boolean;
  isTail: boolean;
  isPointer: boolean;
  highlighted: boolean;
};

const NodeCard = memo(({ value, index, isHead, isTail, isPointer, highlighted }: NodeCardProps) => {
  return (
    <div
      className={[
        "node-card",
        highlighted ? "node-card--highlighted" : "",
        isPointer ? "node-card--pointer" : ""
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="node-card__header">
        <span className="node-card__label">Node {index}</span>
        <div className="node-card__badges">
          {isHead && <span className="node-card__badge node-card__badge--head">head</span>}
          {isTail && <span className="node-card__badge node-card__badge--tail">tail</span>}
        </div>
      </div>
      <div className="node-card__value">value: {value}</div>
      <div className="node-card__next">next ➜ {isTail ? "null" : `Node ${index + 1}`}</div>
      {isPointer && <div className="node-card__pointer">⬆ traversal pointer</div>}
    </div>
  );
});

NodeCard.displayName = "NodeCard";

export default NodeCard;
