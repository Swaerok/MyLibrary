import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../book';

function FindedBooks() {
  const items = useSelector(({ searchLib }) => searchLib.items);

  return (
    <div className="container">
      {items
        ? items.map((obj) => (
            <Book key={obj.key} title={obj.title} author={obj.author_name} img={obj.isbn} />
          ))
        : '1'}
    </div>
  );
}

export default FindedBooks;
