import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
} from "../actions/actions";

//초기화 상태
let initialState = {
  products: [],
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload.products };
    case FETCH_PRODUCTS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
