import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BookActionTypes from '../../redux/books/bookActionType';

function Book() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      {
        type: BookActionTypes.ADD_BOOK,
        payload: {
          item_id: 123,
          title: 'Vignesh sleeping',
          author: 'Vignesh',
        },
      },
    );
  }, []);

  return (
    <div>book</div>
  );
}

export default Book;
