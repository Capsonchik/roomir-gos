import { createSlice } from '@reduxjs/toolkit'
import {fetchGetCartRegion, fetchGetDeflyator, fetchGetPriceDynamic, fetchGetSpendingRate} from "./actions";

const initialState = {
  cartRegions: [],
  priceDynamic: [],
  socialGoods: [],
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
      .addCase(fetchGetSpendingRate.fulfilled, (state, action) => {
        state.spendingRate = action.payload
      })
      .addCase(fetchGetPriceDynamic.fulfilled, (state, action) => {
        state.priceDynamic = action.payload
      })
  }
})

export const { increment, decrement, incrementByAmount } = mainSlice.actions

export default mainSlice.reducer