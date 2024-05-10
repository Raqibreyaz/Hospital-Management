import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Initial Render: During the initial render of your application before the context provider is mounted, components consuming the context will receive the default value, which will be undefined if not provided. Depending on your application logic, this may or may not be desirable behavior.
export const Context = createContext({ isAuthenticated: false })

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [user, setUser] = React.useState({})

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      <App />
    </Context.Provider>
  )
}

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AppWrapper />
//   </React.StrictMode>,
// )

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