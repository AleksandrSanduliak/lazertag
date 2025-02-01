import { configureStore } from '@reduxjs/toolkit';
import { authApi } from 'store/api/authApi';
import authSlice from 'store/slices/authSlice';

export default configureStore({
  reducer: {
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})