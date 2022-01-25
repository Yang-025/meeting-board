import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Loadable from 'react-loadable';
import { PrivateRoute } from '~~components/Route';
import App from '~~features/App';

const routesConfig = [
  {
    name: 'Login',
    path: '/login',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "Auth" */ '~~features/Auth'),
      loading: () => <div>loading...</div>
    }),
    exact: true,
  },
  {
    name: 'TestImgAndCss',
    path: '/test/img',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "TestImgAndCss" */ '~~features/TestImgAndCss'),
      loading: () => <div>loading...</div>
    }),
  },
  {
    name: 'ProtectedTestImgAndCss',
    path: '/protected',
    customMode: 2,
    component: Loadable({
      loader: () => import(/* webpackChunkName: "ProtectedTestImgAndCss" */ '~~features/TestImgAndCss'),
      loading: () => <div>loading...</div>
    }),
  },
  {
    name: 'LandingPage',
    path: '/',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "LandingPage" */ '~~features/LandingPage'),
      loading: () => <div>loading...</div>
    }),
    exact: true,
  },
  {
    name: 'NotFound',
    path: null,
    component: Loadable({
      loader: () => import(/* webpackChunkName: "NotFound" */ '~~features/NotFound'),
      loading: () => <div>loading...</div>
    }),
    exact: true,
  },
];

// 代替indexRoute的方式 http://stackoverflow.com/questions/42254929/how-to-nest-routes-in-react-router-v4
const Routes = () => (
  <App>
    {/* <Route component={asyncLoadBundle('App')} /> */}
    <Switch>
      {routesConfig.map((route) => {
        const { path, component, name, customMode, ...rest } = route;
        if (customMode && customMode === 2) {
          return <PrivateRoute key={name} path={path} component={component} {...rest} />;
        }
        return <Route key={name} path={path} component={component} {...rest} />;
      })}
    </Switch>
  </App>
);

export default Routes;

