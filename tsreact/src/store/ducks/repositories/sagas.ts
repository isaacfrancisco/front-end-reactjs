import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { Repository } from "./types";

import { loadSuccess, loadFailure } from "./actions";

export function* load() {
  try {
    const response: Repository[] = yield call(
      api.get,
      "users/isaacfrancisco/repos"
    );

    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}
