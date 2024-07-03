import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import WujieReact from 'wujie-react'

const { setupApp, preloadApp, bus } = WujieReact
bus.$on('click', msg => window.alert(msg))

setupApp({
  name: 'svelte',
  url: '//localhost:8082/',
  exec: true,
})

setupApp({
  name: 'vue3',
  url: '//localhost:8083/',
  exec: true,
})

setupApp({
  name: 'vue2',
  url: '//localhost:8084/',
  exec: true,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
