import React from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';

import { Dashboard } from './components/pages/dashboard/dashboard-view';
import { NotFound } from './components/pages/404';
import { Settings } from './domains/settings/settings';
import { ApicurioLoader } from './domains/apicurio/apicurio';
import { AtlasmapLoader } from './domains/atlasmap/atlasmap';

export interface AppRoute extends RouteProps {
  labelKey: string;
  icon: any;
}

const routes: AppRoute[] = [
  {
    path: '/',
    labelKey: 'Dashboard',
    component: Dashboard,
    exact: true,
    icon: null
  },
  {
    path: '/settings',
    labelKey: 'Settings',
    component: Settings,
    exact: true,
    icon: null
  },
  {
    path: '/apicurio',
    labelKey: 'Apicurio',
    component: ApicurioLoader,
    exact: true,
    icon: null
  },
  {
    path: '/atlasmap',
    labelKey: 'Atlasmap',
    component: AtlasmapLoader,
    exact: true,
    icon: null
  }
];

const Routes = () => (
  <Switch>
    {routes.map(route => <Route key={route.path} {...route} />)}
    <Route component={NotFound} />
  </Switch>
);

export { Routes, routes };
