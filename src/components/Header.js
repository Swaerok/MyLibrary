import React from 'react';
import InputSearch from '../inputSearch';
import { useDispatch } from 'react-redux';
import { setSearchBooks } from '../redux/actions/searchLib';
import axios from 'axios';
import { useState } from 'react';

function Header() {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const onChangeLabel = (e) => {
    setTitle(e.target.value);
  };

  const handleFetch = (e) => {
    if (e.keyCode == 13) {
      const res = title.split(' ').join('+');
      axios.get(`http://openlibrary.org/search.json?title=${res}&limit=10`).then((data) => {
        dispatch(setSearchBooks(data.data.docs));
      });
    }
  };
  return (
    <div className="header">
      <div className="header__logo">
        <img height="80" width="80" src="../img/logo.png" alt="No logo" />
      </div>
      <div className="header__search">
        <InputSearch
          classN={'header__search__input'}
          onKeyDown={handleFetch}
          onChange={onChangeLabel}
        />
      </div>
      <div className="header__profile" />
    </div>
  );
}

export default Header;
