// src/redux/sagas.js
import { all, put, takeEvery } from "redux-saga/effects";

function* addTodoSaga(action) {
  yield put({ type: "ADD_TODO", payload: action.payload });
}

function* removeTodoSaga(action) {
  yield put({ type: "REMOVE_TODO", payload: action.payload });
}

function* watchAddTodo() {
  yield takeEvery("ADD_TODO_REQUEST", addTodoSaga);
}

function* watchRemoveTodo() {
  yield takeEvery("REMOVE_TODO_REQUEST", removeTodoSaga);
}

export default function* rootSaga() {
  yield all([watchAddTodo(), watchRemoveTodo()]);
}
