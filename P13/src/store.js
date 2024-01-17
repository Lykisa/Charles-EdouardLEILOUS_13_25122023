import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose your storage engine
import rootReducer from './reducers/userReducer'; // Import your root reducer

const persistConfig = {
  key: 'root',
  storage,
  // Specify the reducers you want to persist
  whitelist: ['user'], // In this example, we persist the 'user' reducer
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true
});
export const persistor = persistStore(store);