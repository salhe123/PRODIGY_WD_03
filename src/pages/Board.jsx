// import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

const Board = ({ squares, onClick }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
