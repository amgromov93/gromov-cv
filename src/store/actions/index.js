import RewiewsApi from "./RewiewsApi";

export const ACTION_LOADING = 'ACTION_LOADING';
export const ACTION_ERROR = 'ACTION_ERROR';
export const ACTION_REWIEWS_FETCH = 'ACTION_REWIEWS_FETCH';
export const ACTION_REWIEWS_ADD = 'ACTION_REWIEWS_ADD';
export const ACTION_REWIEWS_DELETE = 'ACTION_REWIEWS_DELETE';
export const ACTION_REWIEWS_UPDATE = 'ACTION_REWIEWS_UPDATE';
export const ACTION_REWIEWS_EDIT = 'ACTION_REWIEWS_EDIT';
export const ACTION_REWIEWS_STATUS_CHANGE = 'ACTION_REWIEWS_STATUS_CHANGE';

export function fetchRewiews() {
  return (dispatch) => {
    dispatch({ type: ACTION_LOADING, payload: true });

    RewiewsApi.getList()
      .then((list) => {
        dispatch({ type: ACTION_REWIEWS_FETCH, payload: list });
        dispatch({ type: ACTION_LOADING, payload: false });
      })
      .catch((e) => {
        dispatch({ type: ACTION_ERROR, payload: e?.message });
      })
  };
}

export function addRewiews(payload) {
  return (dispatch) => {
    RewiewsApi.create(payload).then(() => {
      dispatch({ type: ACTION_REWIEWS_ADD, payload });
    })
  };
}

export function deleteRewiews(payload) {
  return (dispatch) => {
    RewiewsApi.delete(payload).then(() => {
      dispatch({ type: ACTION_REWIEWS_DELETE, payload });
    })
  };
}

export function updateRewiews(payload) {
  return (dispatch) => {
    RewiewsApi.update(payload.id, payload).then(() => {
      dispatch({ type: ACTION_REWIEWS_UPDATE, payload });
    })
  };
}

export function editRewiews(payload) {
  return { type: ACTION_REWIEWS_EDIT, payload };
}