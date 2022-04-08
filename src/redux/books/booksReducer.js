import BookActionTypes from './bookActionType';

const INITIAL_STATE = {
  loading: true,
  books: [],
  error: false,
};

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BookActionTypes.FETCH_BOOKS_START:
      return { ...state, loading: true };
    case BookActionTypes.ADD_BOOK:
      return { ...state, loading: false, books: [...state.books.state, action.payload] };
    case BookActionTypes.FETCH_BOOKS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case BookActionTypes.REMOVE_BOOK:
      return { ...state, books: state.books.filter((book) => book.item_id === action.payload) };
    default:
      return state;
  }
};

export default booksReducer;
