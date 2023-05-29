import { 
  ACTION_ERROR,
  ACTION_LOADING,
  ACTION_REWIEWS_ADD,
  ACTION_REWIEWS_DELETE,
  ACTION_REWIEWS_EDIT,
  ACTION_REWIEWS_FETCH,
  ACTION_REWIEWS_UPDATE 
} from "../actions";

const DEFAULT_REWIEWS = { done: false };
const INITIAL_STATE = {
  rewiews: DEFAULT_REWIEWS,
  loading: false,
  error: '',
  rewiewsList: [],
}

export default function rootReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ACTION_LOADING: return {...state, loading: payload}
    case ACTION_ERROR: return { ...state, error: payload };
    case ACTION_REWIEWS_FETCH: return { ...state, rewiewsList: payload };
    case ACTION_REWIEWS_ADD: return {
      ...state,
      rewiewsList: [...state.rewiewsList, payload],
    };
    case ACTION_REWIEWS_DELETE: return {
      ...state,
      rewiewsList: state.rewiewsList.filter(item => item.id !== payload),
    };
    case ACTION_REWIEWS_EDIT: return { ...state, rewiews: payload };
    case ACTION_REWIEWS_UPDATE: return {
      ...state,
      rewiewsList: state.rewiewsList.map(item => item.id === payload.id ? payload : item),
      item: DEFAULT_REWIEWS,
    };
    default: return state;
  }
}