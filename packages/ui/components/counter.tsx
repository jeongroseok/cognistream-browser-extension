import React from "react";

interface CounterProps {
  count: number;
  onClick: () => void;
}

export function Counter({ count, onClick }: CounterProps) {
  return (
    <button id="counter" type="button" onClick={onClick}>
      {count === 0 ? "Click me" : `count is ${count}`}
    </button>
  );
}
