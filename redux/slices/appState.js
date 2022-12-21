import { createSlice } from '@reduxjs/toolkit';

const appState = createSlice({
  name: 'appState',
  initialState: {
    pageLoader: true,
    error: '',
    success: '',
  },
  reducers: {
    setPageLoader(state, action) {
      state.pageLoader = action.payload;
    },
    setErrorNotification(state, action) {
      state.error = action.payload;
    },
    clearErrorNotification(state) {
      state.error = '';
    },
    setSuccessNotification(state, action) {
      state.success = action.payload;
    },
    clearSuccessNotification(state) {
      state.success = '';
    },
  },
});

export const {
  setPageLoader,
  setErrorNotification,
  clearErrorNotification,
  setSuccessNotification,
  clearSuccessNotification,
} = appState.actions;

export default appState.reducer;
