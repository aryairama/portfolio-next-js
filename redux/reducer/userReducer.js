import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  user: {},
  auth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.userLogin };
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        auth: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: action.payload,
        auth: false,
      };
    case 'PROFILE':
      return {
        ...state,
        user: action.payload,
        auth: true,
      };
    default:
      return state;
  }
};

export default userReducer;
