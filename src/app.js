import React from 'react';
import './app.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Book from './book';
import { setSearchBooks } from './redux/actions/searchLib';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const items = useSelector(({ searchLib }) => searchLib.items);
  const [title, setTitle] = useState('');
  const onChangeLabel = (e) => {
    setTitle(e.target.value);
  };
  const handleFetch = (e) => {
    if (e.keyCode == 13) {
      dispatch(setSearchBooks([]));
      const res = title.split(' ').join('+');
      axios.get(`http://openlibrary.org/search.json?title=${res}&limit=10`).then((data) => {
        dispatch(setSearchBooks(data.data.docs));
      });
    }
  };
  return (
    <div>
      <div className="header">
        <div className="header__logo">
          <img height="80" width="80" src="../img/logo.png" alt="No logo" />
        </div>
        <div className="header__search">
          <input
            onKeyDown={handleFetch}
            onChange={onChangeLabel}
            className="header__search__input"
            type="search"
            placeholder="Search books"
          />
        </div>
        <div className="header__profile" />
      </div>
      <div className="container">
        {items
          ? items.map((obj, index) => (
              <Book key={index} title={obj.title} author={obj.author_name} img={obj.isbn} />
            ))
          : '1'}
      </div>
    </div>
  );
}

export default App;
