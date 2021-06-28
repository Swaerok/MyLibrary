import React from 'react';

function SortButton({ setSort, sort }) {
  const onHandleClick = () => {
    setSort(sort);
  };
  return <li onClick={onHandleClick}>{sort}</li>;
}

export default SortButton;
