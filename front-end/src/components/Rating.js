import React from 'react';

function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((item) => (
        <span key={item + Math.random() + ''}>
          <i
            className={
              rating >= item
                ? 'fas fa-star'
                : rating >= item - 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          />
        </span>
      ))}
      <span> {numReviews} Reviews</span>
    </div>
  );
}

export default Rating;
