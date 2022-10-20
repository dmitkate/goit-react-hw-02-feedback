import React from 'react';

export const Control = ({ good, neutral, bad, total, percent }) => {
  return (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive feedback:{percent}%</p>
    </div>
  );
};
