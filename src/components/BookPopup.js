import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { setProfileBooks } from '../redux/actions/profileBooks';

function BookPopup({ clear, title, img, author, bookKey }) {
  const [image, setImage] = useState(img);
  const [activeItem, setActiveItem] = useState(null);
  const [sortBook, setSortBook] = useState('');
  const sorts = ['Прочитанное', 'Желаемое', 'В процессе'];
  const dispatch = useDispatch();

  useEffect(() => {
    if (!image) {
      setImage('../img/Blank_book.png');
    } else {
      axios
        .get(`http://covers.openlibrary.org/b/isbn/${img[0]}-M.jpg?default=false`)
        .then(() => {
          setImage(`http://covers.openlibrary.org/b/isbn/${img[0]}-M.jpg?default=false`);
        })
        .catch(() => {
          setImage('../img/Blank_book.png');
        });
    }
  }, []);

  const addBookProfile = () => {
    if (!sortBook) {
      return;
    }
    const obj = {
      title,
      img,
      author: author[0],
      sortBook,
      bookKey,
    };
    dispatch(setProfileBooks(obj));
  };

  const clearObjBook = () => {
    addBookProfile();
    clear();
  };
  return (
    <div className="popup-blockout">
      <div className="bookpopup">
        <span onClick={clearObjBook}>×</span>
        <div className="book__author">Author: {author[0]}</div>
        <div className="book__title">Title: {title}</div>
        <img className="book__image" src={image} alt="" />
        <div className="buttons">
          {sorts.map((sort, index) => (
            <Button
              setActive={setActiveItem}
              activeItem={activeItem}
              addBook={addBookProfile}
              sort={sort}
              index={index}
              setSortBook={setSortBook}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
//<Button addBook={addBookProfile} sort="Прочитанное" />
//<Button addBook={addBookProfile} sort="Желаемое" />
//<Button addBook={addBookProfile} sort="В процессе" />
export default BookPopup;
