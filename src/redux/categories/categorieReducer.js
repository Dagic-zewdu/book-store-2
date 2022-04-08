import CategoriesActionTypes from './categoriesActionType';

const INITIAL_STATE = {
  loading: true,
  categories: [],
  error: false,
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriesActionTypes.ADD_CATEGORIES:
      return {
        ...state,
        loading: false,
        categories: [...state.categories.state, action.payload],
      };
    case CategoriesActionTypes.REMOVE_CATEGORIES:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.item_id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default categoriesReducer;
