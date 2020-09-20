import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './index.css';

import Layout from "./pages/Layout"
import Featured from "./pages/Featured"
import Archives from "./pages/Archives"
import Settings from "./pages/Settings"

import * as serviceWorker from './serviceWorker';

const app = document.getElementById('app')


ReactDOM.render(
  <Router>
    <Layout>
      <Route exact path="/" component={Featured}></Route>
      <Route exact path="/archives" component={Archives}></Route>
      <Route path="/archives/:article" component={Archives}></Route>
      <Route path="/settings/:mode(main|extra)" component={Settings}></Route>
    </Layout>
  </Router>,
  app
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
