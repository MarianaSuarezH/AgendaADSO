import React from 'react'
// React: la librería principal

import ReactDOM from 'react-dom/client'
// ReactDOM: dibuja React en el navegador

import App from './App.jsx'
// Importamos el componente raíz (nuestra Agenda ADSO)

import './index.css'
// Importamos los estilos globales

import { AuthProvider } from "./context/AuthContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
    {/* Aquí montamos nuestra Agenda ADSO */}
  </React.StrictMode>,
);
