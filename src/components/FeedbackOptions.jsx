import React from 'react';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(option => (
        <button type="button" onClick={onLeaveFeedback} data-action={option}>
          {option}
        </button>
      ))}
    </>
  );
};
