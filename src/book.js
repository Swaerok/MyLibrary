import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
function Book({ author, title, img }) {
  const [image, setImage] = useState(img);
  if (author === 'undefined') {
    author = 'Unknown';
  }
  if (title === 'undefined') {
    title = 'unknown';
  }
  useEffect(() => {
    if (!image) {
      setImage('../img/Blank_book.png');
    } else {
      axios
        .get(`http://covers.openlibrary.org/b/isbn/${img[0]}-M.jpg?default=false`)
        .then((resp) => {
          setImage(`http://covers.openlibrary.org/b/isbn/${img[0]}-M.jpg?default=false`);
        })
        .catch((err) => {
          setImage('../img/Blank_book.png');
        });
    }
  }, []);

  return (
    <div className="book">
      <div className="book__author">Author: {author}</div>
      <div className="book__title">Title: {title}</div>
      <img className="book__image" src={image} alt="" />
    </div>
  );
}

export default Book;
