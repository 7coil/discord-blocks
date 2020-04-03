import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ReduxProvider from './components/ReduxProvider';
import EditPage from './pages/edit';
import IndexPage from './pages/index';
import './scss/index.scss';

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <ReduxProvider>
        <BrowserRouter>
          <Router history={history}>
            <Route exact path="/">
              <IndexPage />
            </Route>
            <Route exact path="/edit">
              <EditPage />
            </Route>
          </Router>
        </BrowserRouter>
      </ReduxProvider>
    )
  }
}

export default App;
