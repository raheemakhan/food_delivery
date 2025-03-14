import React from 'react'
import ReactDOM from 'react-dom/client'  // ✅ Yahan 'ReactDOM' sahi likha hai
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(  // ✅ Yahan bhi 'ReactDOM' sahi likha hai
  <BrowserRouter>
  <StoreContextProvider>
        <App />
  </StoreContextProvider>
  </BrowserRouter>
);

