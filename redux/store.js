import { configureStore } from '@reduxjs/toolkit';

import appState from './slices/appState';
import user from './slices/user';

const store = configureStore({
  reducer: {
    user,
    appState,
  },
});

export default store;
