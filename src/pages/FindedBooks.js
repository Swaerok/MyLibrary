import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Book from '../book';
import BookPopup from '../components/BookPopup';

function FindedBooks() {
  const items = useSelector(({ searchLib }) => searchLib.items);
  const [objBook, setObjBook] = useState();
  const handleBook = (obj) => {
    setObjBook(obj);
  };
  const clearObjBook = () => {
    setObjBook();
  };

  return (
    <div className="container">
      {objBook ? (
        <BookPopup
          clear={clearObjBook}
          title={objBook.title}
          author={objBook.author}
          img={objBook.img}
          bookKey={objBook.bookKey}
        />
      ) : (
        ''
      )}
      {items
        ? items.map((obj) => (
            <Book
              onHandle={handleBook}
              key={obj.key}
              title={obj.title}
              author={obj.author_name}
              img={obj.isbn}
              bookKey={obj.key}
            />
          ))
        : '1'}
    </div>
  );
}

export default FindedBooks;
