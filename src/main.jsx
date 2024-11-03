import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './components/pages/routes/routes'





createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
)
