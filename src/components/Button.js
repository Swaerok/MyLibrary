import React, { useState } from 'react';

function Button({ sort, setSortBook, addBook, setActive, activeItem, index }) {
  const onCLickSetACtive = () => {
    setActive(index);
    setSortBook(sort);
  };
  return (
    <button
      onClick={onCLickSetACtive}
      className={`button ${index === activeItem ? 'button__active' : ''}`}>
      {sort}
    </button>
  );
}

export default Button;
