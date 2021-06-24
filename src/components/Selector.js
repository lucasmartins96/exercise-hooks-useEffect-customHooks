import React, { useContext } from 'react';

import { Consumer } from './RedditContext';

const renderOptions = (options) =>
  options.map((option) => (
    <option value={option} key={option}>
      {option}
    </option>
  ));

const Selector = () => {
  const { selectedSubreddit, availableSubreddits, selectSubreddit } =
    useContext(Consumer);

  return (
    <span>
      <h1>{`Selected: ${selectedSubreddit}`}</h1>
      <select onChange={(e) => selectSubreddit(e.target.value)} value={selectedSubreddit}>
        {renderOptions(availableSubreddits)}
      </select>
    </span>
  );
};

export default Selector;
