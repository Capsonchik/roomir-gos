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
  fetchGetPurchasingActivityIndex, fetchGetQuestionsData,
  fetchGetSpendingRate
} from "./actions";

const initialState = {
  year: 2023,
  questionId: 0,
  region: 'russia',
  error: false,
  cartRegions: [],
  priceDynamic: [],
  socialGoods: [],
  spendingRate: [],
  deflation: {},
  purchasingActivityIndex: [],
  freeCashIndex: [],
  averageCheck: [],
  mockParam: '',
  currentQuestionCategory: 'Социальное',
  currentQuestionCategories: '',
  currentQuestions: '',
  question: 'Выберите вопрос',
  pieChartData: [
    { value: 1048, name: 'Да' },
    { value: 735, name: 'Нет' },
  ],
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setMockParam: (state, action) => {
      state.mockParam = action.payload
    },
    setCurrentQuestionCategory: (state, action) => {
      state.currentQuestionCategory = action.payload
    },
    setCurrentQuestionCategories: (state, action) => {
      state.currentQuestionCategories = action.payload
    },
    setCurrentQuestions: (state, action) => {
      state.currentQuestions = action.payload
    },
    setQuestion: (state, action) => {
      state.question = action.payload
    },
    setYear: (state,action) => {
      state.year = action.payload
    },
    setQuestionId: (state, action) => {
      state.questionId = action.payload
    },
    setRegion: (state, action) => {
      state.region = action.payload
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetCartRegion.fulfilled, (state, action) => {
        state.cartRegions = action.payload
        state.error = false
      })
      .addCase(fetchGetDeflyator.fulfilled, (state, action) => {
        state.deflation = action.payload
        state.error = false
      })
      .addCase(fetchGetSpendingRate.fulfilled, (state, action) => {
        state.spendingRate = action.payload
        state.error = false
      })
      .addCase(fetchGetPriceDynamic.fulfilled, (state, action) => {
        state.priceDynamic = action.payload
        state.error = false
      })
      .addCase(fetchGetPurchasingActivityIndex.fulfilled, (state, action) => {
        state.purchasingActivityIndex = action.payload
        state.error = false
      })
      .addCase(fetchGetFreeCashIndex.fulfilled, (state, action) => {
        state.freeCashIndex = action.payload
        state.error = false
      })
      .addCase(fetchGetAverageCheck.fulfilled, (state, action) => {
        state.averageCheck = action.payload
        state.error = false
      })
      .addCase(fetchGetMockDeflyator.fulfilled, (state, action) => {
        state.deflation = action.payload
        state.error = false
      })
      .addCase(fetchGetMockSpendingRate.fulfilled, (state, action) => {
        state.spendingRate = action.payload
        state.error = false
      })
      .addCase(fetchGetMockPriceDynamic.fulfilled, (state, action) => {
        state.priceDynamic = action.payload
        state.error = false
      })
      .addCase(fetchGetMockPurchasingActivityIndex.fulfilled, (state, action) => {
        state.purchasingActivityIndex = action.payload
        state.error = false
      })
      .addCase(fetchGetMockFreeCashIndex.fulfilled, (state, action) => {
        state.freeCashIndex = action.payload
        state.error = false
      })
      .addCase(fetchGetMockAverageCheck.fulfilled, (state, action) => {
        state.averageCheck = action.payload
        state.error = false
      })
      .addCase(fetchGetQuestionsData.fulfilled, (state, action) => {
        state.pieChartData = action.payload
        state.error = false
      })
      .addCase(fetchGetQuestionsData.rejected, (state, action) => {
        state.error = true
      })
  }
})

export const {
  setMockParam,
  setCurrentQuestionCategories,
  setCurrentQuestionCategory,
  setCurrentQuestions,
  setQuestion,
  setQuestionId,
  setRegion,
  setYear
} = mainSlice.actions

export default mainSlice.reducer