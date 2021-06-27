import React from 'react';

function InputSearch({ classN, onKeyDown, onChange }) {
  return (
    <div>
      <input
        onKeyDown={onKeyDown}
        onChange={onChange}
        className={classN}
        type="search"
        placeholder="Search books"
      />
    </div>
  );
}

export default InputSearch;
