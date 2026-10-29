import React from 'react';
import ReactDOM from 'react-dom/client';
import Social from './componentes/Social';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Social />
  </React.StrictMode>
);

function Social() {
  return <h1>hello world</h1>;
}

export default Social;