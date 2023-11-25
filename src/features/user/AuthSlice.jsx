import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';
customFetch;
import { toast } from 'react-toastify';

const authSlice = createSlice({
  name: '',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
