
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarShow: true,
  sidebarUnfoldable: false, 
  theme: 'light',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    set(state, action) {
      return { ...state, ...action.payload }
    },
  },
})

export const { set } = uiSlice.actions
export default uiSlice.reducer