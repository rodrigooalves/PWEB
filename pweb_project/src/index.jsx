import React from 'react';
import { createRoot } from 'react-dom/client';
import Social from './componentes/Social';

createRoot(document.getElementById('root')).render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(Social)
  )
);
