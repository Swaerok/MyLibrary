const initialState = {
  items: [],
};

const searchLib = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_BOOKS': {
      return {
        ...state,
        items: action.payload,
      };
    }
    default:
      return state;
  }
};

export default searchLib;
