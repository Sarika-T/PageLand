import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './Reducers';
import autosave from './Middleware';

const persistedReducer = persistReducer({ key: 'layout', storage }, reducer);
export const store = createStore(persistedReducer, applyMiddleware(autosave));
export const persistor = persistStore(store);
