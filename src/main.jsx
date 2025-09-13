import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import NewHome from './NewHome/NewHome'
import MainHomeLayout from './MainLayout/MainHomeLayout'
// import { RouterProvider } from 'react-router-dom'
// import Router from './Router/Router.jsx'
// import AuthProvider from './AuthProvider/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainHomeLayout></MainHomeLayout>
  </StrictMode>,
)
