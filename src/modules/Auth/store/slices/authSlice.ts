import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import Invoke from '../../../../app/services/Invoke';

export interface AuthState {
  user: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

// ==========================
// ASYNC LOGIN
// ==========================
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const res = await Invoke.postSignIn(username, password);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || err.message);
    }
  },
);

// ==========================
// ASYNC REGISTER
// ==========================
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const res = await Invoke.postSignUp(username, password);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || err.message);
    }
  },
);

// ==========================
// SLICE
// ==========================
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // ACTION LOGIN MANUAL (tidak pakai API)
    login: (state, action: PayloadAction<{ username: string }>) => {
      state.user = { username: action.payload.username };
      state.error = null;
    },

    // ACTION REGISTER MANUAL (tidak pakai API)
    register: (state, action: PayloadAction<{ username: string }>) => {
      state.user = { username: action.payload.username };
      state.error = null;
    },

    logout: state => {
      state.user = null;
      state.error = null;
    },

    resetError: state => {
      state.error = null;
    },
  },

  extraReducers: builder => {
    builder
      // LOGIN (async)
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
      })

      // REGISTER (async)
      .addCase(registerUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
      });
  },
});

// EXPORT ACTIONS
export const { login, register, logout, resetError } = authSlice.actions;

// EXPORT REDUCER
export default authSlice.reducer;
