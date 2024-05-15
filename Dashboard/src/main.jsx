import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createContext } from 'react'

export const Context = createContext({ isAuthenticated: false })

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({})

  return < Context.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
    <App />
  </Context.Provider >
}


let container = null;

document.addEventListener('DOMContentLoaded', function(event) {
  if (!container) {
    container = document.getElementById('root');
    const root = ReactDOM.createRoot(container)
    root.render(
      <React.StrictMode>
        <AppWrapper/>
      </React.StrictMode>
    );
  }
});