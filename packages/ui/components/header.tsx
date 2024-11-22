import React from "react";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header id="header">
      <h1>{title}</h1>
    </header>
  );
}
