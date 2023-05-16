import React from 'react';

const ScoreScreen = ({ lastCompletedIteration }) => {
  return (
    <div>
      <h2>Score Screen</h2>
      <p>Last Completed Iteration: {lastCompletedIteration}</p>
      {/* Additional content for the score screen */}
    </div>
  );
};

export default ScoreScreen;
