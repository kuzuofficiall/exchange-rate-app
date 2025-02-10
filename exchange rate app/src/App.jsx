// App.jsx
import React from 'react';
import CurrencyConverter from './CurrencyConverter';
import "./css/App.css"

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Döviz Kuru Uygulaması</h1>
      <CurrencyConverter />
    </div>
  );
}

export default App;
