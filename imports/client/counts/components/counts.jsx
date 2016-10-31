import React from 'react';

const Counts = ({data, countsSortFilter, updateCountsSortFilter}) => {
  if (data.loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }
  return (
    <div>
      <h3>Currently Sorted by {countsSortFilter}</h3>
      {
        data.counts.map((count, index) => {
          return (
            <div key={index}>
              Amount: {count.amount}, Created At: {count.createdAt}
            </div>
          );
        })
      }
      <button onClick={e => {
          e.preventDefault();
          updateCountsSortFilter('Smallest');
        }}>Sort by Smallest</button>
      <button onClick={e => {
          e.preventDefault();
          updateCountsSortFilter('Biggest');
        }}>Sort by Biggest</button>
    </div>
  );
};

export default Counts;
