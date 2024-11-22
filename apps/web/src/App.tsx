import React from "react";
import { Header } from "@packages/ui/header";
import { Counter } from "@packages/ui/counter";
import logo from "/typescript.svg";
import { useCounter } from "@packages/ui/useCounter";

export default function App() {
  const { count, increment } = useCounter();

  return (
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noopener">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">
        <img src={logo} className="logo vanilla" alt="TypeScript logo" />
      </a>
      <Header title="Web" />
      <div className="card">
        <Counter count={count} onClick={increment} />
      </div>
    </div>
  );
}
