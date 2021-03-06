import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/layout/App'
import { Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import { createBrowserHistory } from 'history'
import { StoreProvider } from './app/api/context/storeContext'

export const history = createBrowserHistory() //export it out and use it across the app

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
