import { ActionTypes } from '../constants/action-types';
const initialState = {
  products: [],
  loading: false,
  error: null,
  successMsg: '',
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case ActionTypes.GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ActionTypes.DELETE_PRODUCT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.DELETE_PRODUCT_SUCCESS:
      const products = state.products.filter((product) => product.id !== payload.id);
      console.log(products, payload, 'payload');
      return {
        ...state,
        loading: false,
        successMsg: 'Successfully deleted!',
        products,
      };
    case ActionTypes.DELETE_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ActionTypes.UPDATE_PRODUCT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.UPDATE_PRODUCT_SUCCESS:
      const index = state.products.findIndex((product) => product.id === payload.id);
      console.log(payload, 'payload');
      const newArray = [...state.products];
      newArray[index] = payload;
      return {
        ...state,
        loading: false,
        products: newArray,
      };
    default:
      return state;
  }
};
