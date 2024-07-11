import { createSlice } from '@reduxjs/toolkit'
import {
  fetchGetAverageCheck,
  fetchGetCartRegion,
  fetchGetDeflyator,
  fetchGetFreeCashIndex, fetchGetMockAverageCheck,
  fetchGetMockDeflyator, fetchGetMockFreeCashIndex,
  fetchGetMockPriceDynamic,
  fetchGetMockPurchasingActivityIndex,
  fetchGetMockSpendingRate,
  fetchGetPriceDynamic,
  fetchGetPurchasingActivityIndex,
  fetchGetSpendingRate
} from "./actions";

const initialState = {
  cartRegions: [],
  priceDynamic: [],
  socialGoods: [],
  spendingRate: [],
  deflation: {},
  purchasingActivityIndex: [],
  freeCashIndex: [],
  averageCheck: [],
  mockParam: ''
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setMockParam: (state, action) => {
      state.mockParam = action.payload
    }
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
      .addCase(fetchGetPurchasingActivityIndex.fulfilled, (state, action) => {
        state.purchasingActivityIndex = action.payload
      })
      .addCase(fetchGetFreeCashIndex.fulfilled, (state, action) => {
        state.freeCashIndex = action.payload
      })
      .addCase(fetchGetAverageCheck.fulfilled, (state, action) => {
        state.averageCheck = action.payload
      })
      .addCase(fetchGetMockDeflyator.fulfilled, (state, action) => {
        state.deflation = action.payload
      })
      .addCase(fetchGetMockSpendingRate.fulfilled, (state, action) => {
        state.spendingRate = action.payload
      })
      .addCase(fetchGetMockPriceDynamic.fulfilled, (state, action) => {
        state.priceDynamic = action.payload
      })
      .addCase(fetchGetMockPurchasingActivityIndex.fulfilled, (state, action) => {
        state.purchasingActivityIndex = action.payload
      })
      .addCase(fetchGetMockFreeCashIndex.fulfilled, (state, action) => {
        state.freeCashIndex = action.payload
      })
      .addCase(fetchGetMockAverageCheck.fulfilled, (state, action) => {
        state.averageCheck = action.payload
      })
  }
})

export const {
  setMockParam
} = mainSlice.actions

export default mainSlice.reducer