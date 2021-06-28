import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SortButton from '../components/SortButton';
import { setSortedBooks } from '../redux/actions/profileBooks';
import Book from '../book';
const Profile = () => {
  const dispatch = useDispatch();
  const sortBooks = useSelector(({ profileBooks }) => profileBooks.sortBooks);

  const sorts = ['Прочитанное', 'Желаемое', 'В процессе'];

  const handleClick = (sort) => {
    dispatch(setSortedBooks(sort));
  };
  return (
    <div className="profile">
      <div className="profile__boxes">
        <ul>
          {sorts.map((item) => (
            <SortButton setSort={handleClick} sort={item} key={`${item}${new Date().getTime()}`} />
          ))}
        </ul>
      </div>
      <div className="profile__content">
        {sortBooks.length > 0 &&
          sortBooks.map((obj) => (
            <Book
              key={obj.bookKey}
              title={obj.title}
              author={obj.author}
              img={obj.img}
              bookKey={obj.bookKey}
            />
          ))}
      </div>
    </div>
  );
};

export default Profile;
