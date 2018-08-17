import React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

export function App({name, enthusiasmLevel = 1}: Props) {
  console.log('App.tsx');

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
