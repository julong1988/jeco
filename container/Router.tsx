import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Loader from './Loader';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {jeco.ROUTES.map(({ path }: any) => {
        const props = {
          path: [path],
          key: path,
          component: Loader(path),
        };
        if (path === '/index') {
          props.path.push('/');
        }
        return <Route {...props} />;
      })}
    </Switch>
  </BrowserRouter>
);

export default Router;
