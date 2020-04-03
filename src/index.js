import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const element = document.getElementById('app')

const app = (
  <App />
)

ReactDOM.render(app, element)

// Enable Hot Module Reloading
if (module.hot) {
  module.hot.accept();
}
