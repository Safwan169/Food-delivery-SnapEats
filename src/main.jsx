import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './ContextProvider.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Componants/Route/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
    <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>,
)
