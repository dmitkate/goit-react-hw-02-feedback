import React from 'react';

export const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <div>
      <button type="button" onClick={onLeaveFeedback} data-action={option}>
        GOOD
      </button>
      <button type="button" onClick={onLeaveFeedback} data-action={option}>
        NAUTRAL
      </button>
      <button type="button" onClick={onLeaveFeedback} data-action={option}>
        BAD
      </button>
    </div>
  );
};
