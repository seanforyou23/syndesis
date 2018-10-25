import React from 'react';
import Loadable from 'react-loadable';
import { Loading } from '../../components/loading/loading';

const AsyncAtlasmapLoader = Loadable({
  loader: () => import(/* webpackChunkName: "atlasmapChunk" */ './atlasmap-wc'),
  loading: Loading,
  delay: 1000
});

export function AtlasmapLoader() {
  return <AsyncAtlasmapLoader />;
}
