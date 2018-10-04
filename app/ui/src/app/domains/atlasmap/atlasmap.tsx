import React from 'react';
import './atlasmap-wc';

export interface Props {
  embedded: boolean;
}

export function AtlasmapLoader({embedded}: Props) {
  return <atlasmap-component embedded={true} />;
}
