import { createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react'



const initialState = {
  value: 0,
}

export const dataSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = dataSlice.actions

export default dataSlice.reducer