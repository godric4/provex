import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/axios'
customFetch
import { toast } from 'react-toastify'

import React from 'react'

const authSlice = createSlice({
  name: '',
  initialState,
  reducers: {},
})

export default authSlice.reducer
