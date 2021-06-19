import { ActionTypes } from './../constants/action-types';

export const getProductsAction = (products) => {
  return {
    type: ActionTypes.GET_PRODUCTS_REQUESTED,
    payload: products,
  };
};

export const deleteProductAction = (id) => {
  return {
    type: ActionTypes.DELETE_PRODUCT_REQUESTED,
    payload: id,
  };
};

export const updateProductAction = (product) => {
  return {
    type: ActionTypes.UPDATE_PRODUCT_REQUESTED,
    payload: product,
  };
};
