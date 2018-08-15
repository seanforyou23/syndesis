import React from 'react';
import ReactDOM from 'react-dom';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

export function HelloReactTypeScript({name, enthusiasmLevel = 1}: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div>
      <h1>{name + getExclamationMarks(enthusiasmLevel)}</h1>
    </div>
  );
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

ReactDOM.render(
  <HelloReactTypeScript name="Syndesis" enthusiasmLevel={2} />,
  document.getElementById('syn-root') as HTMLElement
);
