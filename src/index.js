import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ReduxProvider from './components/ReduxProvider';

const element = document.getElementById('app')

const app = (
  <ReduxProvider>
    <App />
  </ReduxProvider>
)

ReactDOM.render(app, element)

// Enable Hot Module Reloading
if (module.hot) {
  module.hot.accept();
}
