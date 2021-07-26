import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  firestore,
  convertSectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import {
  fetchSectionsSuccess,
  fetchSectionsFailure
} from './directory.actions';

import DirectoryActionTypes from './directory.types';

export function* fetchSectionsAsync() {
  try {
    const collectionRef = firestore.collection('sections');
    const snapshot = yield collectionRef.get();
    const SectionsMap = yield call(
        convertSectionsSnapshotToMap,
        snapshot
    );
    yield put(fetchSectionsSuccess(SectionsMap));
  } catch (error) {
    yield put(fetchSectionsFailure(error.message));
  }
}

export function* fetchSectionsStart() {
  yield takeLatest(
    DirectoryActionTypes.FETCH_SECTIONS_START,
    fetchSectionsAsync
  );
}

export function* directorySagas() {
  yield all([call(fetchSectionsStart)]);
}
