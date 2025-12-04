import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../modules/Auth/store/slices/authSlice';
import todoReducer from '../../modules/Beranda/store/slices/todoSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
