import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Routers.jsx'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
      <Toaster position='top-right' toastOptions={{ style: { zIndex: 9999 } }}/>
    </AuthProvider>
  </StrictMode>,
)
