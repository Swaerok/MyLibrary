import React from 'react';
import './app.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Book from './book';

function App() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState();
  const onChangeLabel = (e) => {
    setTitle(e.target.value);
  };
  /*useEffect(() => {
    axios
      .get(`http://openlibrary.org/search.json?q=the+lord+of+the+rings&limit=10`)
      .then((data) => {
        setDate(data.data.docs);
        console.log(data.data.docs);
      });
  }, []); */
  const handleFetch = (e) => {
    if (e.keyCode == 13) {
      setDate([]);
      const res = title.split(' ').join('+');
      axios.get(`http://openlibrary.org/search.json?title=${res}&limit=10`).then((data) => {
        setDate(data.data.docs);
        console.log(data);
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
        {date
          ? date.map((obj, index) => (
              <Book key={index} title={obj.title} author={obj.author_name} img={obj.isbn} />
            ))
          : '1'}
      </div>
    </div>
  );
}

export default App;
