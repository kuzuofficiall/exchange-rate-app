// Currency.jsx
import React, { useState } from 'react';
import "./css/Currency.css"
import { FaExchangeAlt } from 'react-icons/fa';
import axios from 'axios';

function CurrencyConverter() {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(null);



    const BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
    const API_KEY = "fca_live_YsxzdEIIZ0yGMtIKbtI3a5CUiAIqZjqJ3xF6jvtj"

    const handleConvert = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
    }
    const handleSwap = () => {
        const temp = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(temp);
    };

    return (
        <div className="currency-container">
            <div className="converter-box">
                <input
                    type="number"
                    placeholder="Miktar"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="currency-input"
                />
                <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className="currency-select">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                    <option value="GBP">GBP</option>
                </select>

                <FaExchangeAlt className="exchange-icon" onClick={handleSwap} />

                <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className="currency-select">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                    <option value="GBP">GBP</option>
                </select>

                <button onClick={handleConvert} className="convert-button">
                    Çevir
                </button>

                {result && <div className="result">Sonuç: {result} {toCurrency}</div>}
            </div>
        </div>
    );
}

export default CurrencyConverter;