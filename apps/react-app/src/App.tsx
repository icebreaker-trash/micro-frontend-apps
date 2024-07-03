import { useState } from 'react'
import './App.css'
import WujieReact from 'wujie-react'

function App() {
  return (
    <>
      <WujieReact
        width="100px"
        height="100px"
        name="svelte"
        url="//localhost:8082/"
        sync={true}
        alive={true}
      >
      </WujieReact>
      <WujieReact
        width="100px"
        height="100px"
        name="vue3"
        url="//localhost:8083/"
        sync={true}
        alive={true}
      >
      </WujieReact>
      <WujieReact
        width="100px"
        height="100px"
        name="vue2"
        url="//localhost:8084/"
        sync={true}
        alive={true}
      >
      </WujieReact>
    </>
  )
}

export default App
