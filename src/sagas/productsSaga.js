import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../plugins/Api';
import { ActionTypes } from '../redux/constants/action-types';

function* getProducts(action) {
  //   console.log(action, 'hey');
  try {
    const { data } = yield call(Api.get, '/products');
    yield put({ type: ActionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: ActionTypes.GET_PRODUCTS_FAILED, payload: error.message });
  }
}

function* deleteProduct(action) {
  const { payload } = action;
  try {
    const { data } = yield call(Api.delete, `/products/${payload}`);
    console.log(data);
    yield put({ type: ActionTypes.DELETE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    yield put({ type: ActionTypes.DELETE_PRODUCT_FAILED, payload: error.message });
  }
}

function* updateProduct(action) {
  const { payload } = action;
  console.log(payload.id);
  try {
    const { data } = yield call(Api.put, `/products/${payload.id}`, { ...payload });
    const updatedObj = { ...data, ...payload };
    yield put({ type: ActionTypes.UPDATE_PRODUCT_SUCCESS, payload: updatedObj });
  } catch (error) {
    yield put({ type: ActionTypes.UPDATE_PRODUCT_FAILED, payload: error.message });
  }
}

function* productsSaga() {
  yield takeEvery(ActionTypes.GET_PRODUCTS_REQUESTED, getProducts);
  yield takeEvery(ActionTypes.DELETE_PRODUCT_REQUESTED, deleteProduct);
  yield takeEvery(ActionTypes.UPDATE_PRODUCT_REQUESTED, updateProduct);
}

export default productsSaga;
