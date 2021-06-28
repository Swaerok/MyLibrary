const initialState = {
  books: [],
  sortBooks: [],
};

const profileBooks = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROFILE_BOOKS': {
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    }
    case 'SET_SORTED_BOOKS': {
      const arr = [];
      if (state.books.length > 0) {
        state.books.forEach((item) => {
          if (item.sortBook == action.payload) {
            arr.push(item);
          }
        });
      }
      return {
        ...state,
        sortBooks: arr,
      };
    }
    default:
      return state;
  }
};

export default profileBooks;
