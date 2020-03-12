import React from 'react';
import { connect } from 'react-redux';

import { ratingSearch } from '../../JS/actions/actions';

const Rating = (props) => {
  let starArray = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.count){
      starArray.push(
        <span
          key={i}
          role='img'
          aria-label='star'
          onClick={() => props.ratingSearch(i + 1)}
        >
          ★
        </span>
      );
    } else {
      starArray.push(
        <span
          key={i}
          role='img'
          aria-label='star'
          onClick={() => props.ratingSearch(i + 1)}
        >
          ☆
        </span>
      );
    }

  }
  return <div>{starArray}</div>;
};

export default connect(null, { ratingSearch })(Rating);