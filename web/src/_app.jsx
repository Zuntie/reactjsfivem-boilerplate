import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'

import HomePage from './index.jsx'
import WindowListener from './utils/WindowListener.js'
import useStore from './state/store.jsx'

import './style.css'


const Root = () => {
  const { visible } = useStore()

  useEffect(() => {
    if (visible == true) {
      document.body.style.display = 'flex'
    } else {
      document.body.style.display = 'none'
    }
  }, [visible])

  return (
    <React.StrictMode>
      <WindowListener>
        {visible == true ? <HomePage /> : void (0)}
      </WindowListener>
    </React.StrictMode>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Root />)