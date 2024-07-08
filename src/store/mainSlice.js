import { createSlice } from '@reduxjs/toolkit'
import {fetchGetCartRegion, fetchGetDeflyator} from "./actions";

const initialState = {
  cartRegions: [],
  priceDynamic: [],
  spendingRate: [],
  deflation: {}
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
      .addCase(fetchGetDeflyator.fulfilled, (state, action) => {
        state.deflation = action.payload
      })
  }
})

export const { increment, decrement, incrementByAmount } = mainSlice.actions

export default mainSlice.reducer