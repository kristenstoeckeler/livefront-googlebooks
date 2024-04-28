import {combineReducers} from "redux"; 
import { 
  applyMiddleware,
  configureStore
} from '@reduxjs/toolkit'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { thunk } from 'redux-thunk'

const middleware = [ thunk ]

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
});

const appliedMiddleware = applyMiddleware(...middleware)
const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    appliedMiddleware,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

 
