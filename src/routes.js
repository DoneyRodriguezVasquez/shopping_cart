//Dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';
//Components
import App from './components/App';
import Products from './components/Products';
import Cart from './components/Cart';
import Page404 from './components/Page404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path = "/" component={Products}/>
      <Route exact path = "/cart" component={Cart}/>
      <Route component={Page404} />
    </Switch>
  </App>

export default AppRoutes;
