import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './features/user/UserSlice'
import sidebarReducer from './features/user/SidebarSlice'

export const store = configureStore({
  reducer: {
    user: UserSlice,
    sidebar: sidebarReducer,
  },
})
