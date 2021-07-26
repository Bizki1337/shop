import DirectoryActionTypes from './directory.types';

export const fetchSectionsStart = () => ({
  type: DirectoryActionTypes.FETCH_SECTIONS_START
});

export const fetchSectionsSuccess = sectionsMap => ({
  type: DirectoryActionTypes.FETCH_SECTIONS_SUCCESS,
  payload: sectionsMap
});

export const fetchSectionsFailure = errorMessage => ({
  type: DirectoryActionTypes.FETCH_SECTIONS_FAILURE,
  payload: errorMessage
});