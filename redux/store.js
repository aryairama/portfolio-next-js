import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/rootReducer';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import { nextReduxCookieMiddleware, wrapMakeStore } from 'next-redux-cookie-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export let clientStore = null;
export const store = wrapMakeStore(() => {
  clientStore = createStore(
    rootReducer,
    bindMiddleware([
      nextReduxCookieMiddleware({
        subtrees: [{ subtree: 'userLogin', cookieName: 'MyPortfolio' }],
        secure: true,
        sameSite: 'none',
      }),
      thunk,
    ])
  );
  return clientStore;
});
export const wrapper = createWrapper(store, { debug: false });
