import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterReducer from '@store/counterSlice';
import {MMKV} from 'react-native-mmkv';
import {
  TypedUseSelectorHook,
  useDispatch as _useDispatch,
  useSelector as _useSelector,
} from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
  Storage,
} from 'redux-persist';

const rootReducer = combineReducers({
  //here add all your reducers
  counter: counterReducer,
});

// using MMKV storage for storing persisted data.
//for more details https://github.com/mrousavy/react-native-mmkv

const mmkvStorage = new MMKV({
  id: 'projectName-app-storage',
  encryptionKey: 'Please_add_your_encryption_key_for_your_storage',
});

const storage: Storage = {
  setItem: (key, value) => {
    mmkvStorage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = mmkvStorage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    mmkvStorage.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
  blacklist: ['counter'], // Put here the reducers that you don't want to be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// In order to always have typing please use these hooks throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch: () => AppDispatch = _useDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;

export const persistor = persistStore(store);
