import { createSlice } from '@reduxjs/toolkit';
import { eraseCookie, setCookie } from '../../utils/funcs/cookies';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    accessToken: null,
    isAuth: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
      state.accessToken = null;

      eraseCookie('accessToken');
    },

    setUser: (state, action) => {
      const { user, accessToken } = action.payload;
      console.log('state', state);
      console.log('action', action);
      state.user = user;
      state.accessToken = accessToken;

      if (!accessToken) {
        state.isAuth = false;
      }
      console.log('accessToken', accessToken);
      setCookie('accessToken', accessToken, 15, 'minutes');
      console.log('setCookie', setCookie('accessToken', accessToken, 15, 'minutes'));
      state.isAuth = true;
    },
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
