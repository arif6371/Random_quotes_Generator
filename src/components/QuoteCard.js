import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ quote, fetchQuote, saveQuote }) => {
  return (
    <div className="quote-card">
      <p>{quote}</p>
      <div className="buttons">
        <button onClick={fetchQuote}>New Quote</button>
        <button onClick={saveQuote}>Save Quote</button>
      </div>
    </div>
  );
};

export default QuoteCard;
