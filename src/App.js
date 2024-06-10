import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    setQuote(response.data[0]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, { text: quote, color: getRandomColor() }]);
  };

  const clearQuotes = () => {
    setSavedQuotes([]);
  };

  const getRandomColor = () => {
    const colors = ['#ff8d83', '#ff6a6a', '#f5c242', '#8fd3f4', '#b2f5ea'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="app">
      <h1>Ron Swanson Quotes</h1>
      <QuoteCard quote={quote} fetchQuote={fetchQuote} saveQuote={saveQuote} />
      <h2>Saved Quotes</h2>
      <button onClick={clearQuotes} className="buttons clear-btn">Clear All</button>
      <div className="saved-quotes">
        {savedQuotes.map((savedQuote, index) => (
          <div key={index} className="saved-quote-card" style={{ backgroundColor: savedQuote.color }}>
            {savedQuote.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
