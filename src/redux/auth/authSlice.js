import { createSlice } from '@reduxjs/toolkit';

import {
  registration,
  login,
  logout,
  refreshCurrentUser,
} from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuthorized: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registration.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthorized = true;
    },

    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthorized = true;
    },

    [logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isAuthorized = false;
      state.isRefreshing = false;
      state.error = null;
    },

    [refreshCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isAuthorized = true;
      state.isRefreshing = false;
    },
    [refreshCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
