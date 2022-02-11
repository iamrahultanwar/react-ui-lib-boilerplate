import React from "react";

interface IButton {
  title: string;
}

export default function Button({ title }: IButton) {
  return <button>{title}</button>;
}
