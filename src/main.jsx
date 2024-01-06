import React from 'react'
import ReactDOM from 'react-dom/client'
import MemoryCardGame from './components/MemoryCardGame'
import * as ApiTesting from './components/apiTesting'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemoryCardGame />
  </React.StrictMode>,
)

ApiTesting.apiTest();
