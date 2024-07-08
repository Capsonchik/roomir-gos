import { createSlice } from '@reduxjs/toolkit'
import {fetchGetCartRegion} from "./actions";

const initialState = {
  cartRegions: []
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetCartRegion.fulfilled, (state, action) => {
        state.cartRegions = action.payload
      })
  }
})

export const { increment, decrement, incrementByAmount } = mainSlice.actions

export default mainSlice.reducer