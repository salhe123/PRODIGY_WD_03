// import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ value, onClick }) => {
  return (
    <button 
      className="w-16 h-16 bg-gray-200 border-2 border-gray-500 text-2xl font-bold"
      onClick={onClick}
    >
      {value}
    </button>
  );
}
export default Square;