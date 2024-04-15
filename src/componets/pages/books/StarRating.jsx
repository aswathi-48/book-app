import React, { useState } from 'react';
import { Rating } from '@mui/material';

const StarRating = ({ rating, onChange }) => {
  return (
    <Rating
      name="rating"
      value={rating}
      onChange={(e, newValue) => {
        onChange(newValue);
      }}
    />
  );
};

export default StarRating;