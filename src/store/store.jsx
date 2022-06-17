import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from "./root-reducer";
import {localStorageMiddleware, reHydrateStore} from './middleware/localStorage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();


const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
  const middleWares = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware,
  ].filter(Boolean);
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares, localStorageMiddleware));

export const store = createStore(persistedReducer,
  reHydrateStore(),
  composedEnhancers);

export const persistor = persistStore(store);