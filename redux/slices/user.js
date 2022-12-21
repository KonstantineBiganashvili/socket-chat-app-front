import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {
    profile: null,
    isLoading: true,
    chats: [],
    countries: [],
    token:
      (typeof window !== 'undefined' && localStorage.getItem('token')) || null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    clearToken(state) {
      state.token = null;
    },
    setUser(state, action) {
      state.profile = action.payload.user;
      state.countries = action.payload.countries;
      state.chats = action.payload.chats;
    },
    setProfile(state, action) {
      state.profile = action.payload;
    },
    clearUser(state) {
      state.profile = {};
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setToken,
  clearToken,
  setUser,
  setProfile,
  clearUser,
  setCountries,
  setChats,
  setLoading,
} = user.actions;

export default user.reducer;
