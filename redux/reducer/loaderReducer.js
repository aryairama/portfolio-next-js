import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  waiting: false,
  type: [],
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      const nextState = { ...state, ...action.payload.loader };
      if (state.waiting) nextState.waiting = state.waiting;
      return nextState;
    case 'FETCHING':
      return {
        ...state,
        waiting: action.payload.waiting,
        type: action.payload.type,
      };
    default:
      return state;
  }
};

export default loaderReducer;
