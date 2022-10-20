import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'

import { LoginContextProvider } from './states/exemplo1-context'

function App() {
  return (
    <LoginContextProvider>
      <RouterProvider router={routes} />
    </LoginContextProvider>
  )
}

export default App
