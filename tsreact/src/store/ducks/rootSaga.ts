import { all, takeLatest } from "redux-saga/effects";

import { RepositoriesTypes } from "./repositories/types";
import { load } from "./repositories/sagas";

function* rootSaga() {
  yield all([takeLatest(RepositoriesTypes.LOAD_REQUEST, load)]);
}

export default rootSaga;
