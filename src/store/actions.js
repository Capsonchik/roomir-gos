import {axiosRequest} from "../api/apiConfig";
import {API_ROUTES} from "../api/apiRoutes";
import {createAsyncThunk} from "@reduxjs/toolkit";


// Список регионов при отображении карты
export const fetchGetCartRegion = createAsyncThunk(
  'user',
  async (userData) => {
    try {
      const response = await axiosRequest.get(API_ROUTES.cartography);
      if (response.status === 200) {
        return response.data;
      } else {
        return 'error';
      }
    } catch (error) {
      return 'throwError(error)';
    }
  }
);


// Дефлятор
export const fetchGetDeflyator = createAsyncThunk(
  'deflyator',
  async (userData) => {
    try {
      const response = await axiosRequest.get(API_ROUTES.deflyator);
      if (response.status === 200) {
        return response.data;
      } else {
        return 'error';
      }
    } catch (error) {
      return 'throwError(error)';
    }
  }
);


// Доля трат
export const fetchGetSpendingRate = createAsyncThunk(
  'spendingRate',
  async (userData) => {
    try {
      const response = await axiosRequest.get(API_ROUTES.spendingRate);
      if (response.status === 200) {
        return response.data;
      } else {
        return 'error';
      }
    } catch (error) {
      return 'throwError(error)';
    }
  }
);

// Динамика цены
export const fetchGetPriceDynamic = createAsyncThunk(
  'priceDynamic',
  async (userData) => {
    try {
      const response = await axiosRequest.get(API_ROUTES.priceDynamic);
      if (response.status === 200) {
        return response.data;
      } else {
        return 'error';
      }
    } catch (error) {
      return 'throwError(error)';
    }
  }
);


// Индекс покупательской активности
export const fetchGetPurchasingActivityIndex = createAsyncThunk(
  'PurchasingActivityIndex',
  async (userData) => {
    try {
      const response = await axiosRequest.get(API_ROUTES.purchasingActivityIndex);
      if (response.status === 200) {
        return response.data;
      } else {
        return 'error';
      }
    } catch (error) {
      return 'throwError(error)';
    }
  }
);

// Индекс свободных денег
export const fetchGetFreeCashIndex = createAsyncThunk(
  'FreeCashIndex',
  async (userData) => {
    try {
      const response = await axiosRequest.get(API_ROUTES.freeCachIndex);
      if (response.status === 200) {
        return response.data;
      } else {
        return 'error';
      }
    } catch (error) {
      return 'throwError(error)';
    }
  }
);


// Динамика среднего чека
export const fetchGetAverageCheck = createAsyncThunk(
  'AverageCheck',
  async (userData) => {
    try {
      const response = await axiosRequest.get(API_ROUTES.freeCachIndex);
      if (response.status === 200) {
        return response.data;
      } else {
        return 'error';
      }
    } catch (error) {
      return 'throwError(error)';
    }
  }
);



