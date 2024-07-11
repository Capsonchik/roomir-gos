import {axiosRequest} from "../api/apiConfig";
import {API_ROUTES} from "../api/apiRoutes";
import {createAsyncThunk} from "@reduxjs/toolkit";


// Список регионов при отображении карты
export const fetchGetCartRegion = createAsyncThunk(
  'user',
  async () => {
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
  async () => {
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
  async () => {
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
  async () => {
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
  async () => {
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
  async () => {
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
  async () => {
    try {
      const response = await axiosRequest.get(API_ROUTES.avarageCheck);
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


// Ручки для обновления данных

export const fetchGetMockDeflyator = createAsyncThunk(
  'mockDeflyator',
  async (data) => {
    try {
      const response = await axiosRequest.get(`${API_ROUTES.deflyator}?region=${data}`);
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

export const fetchGetMockSpendingRate = createAsyncThunk(
  'mockSpendingRate',
  async (data) => {
    try {
      const response = await axiosRequest.get(`${API_ROUTES.spendingRate}?region=${data}`);
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

export const fetchGetMockPriceDynamic = createAsyncThunk(
  'mockPriceDynamic',
  async (data) => {
    try {
      const response = await axiosRequest.get(`${API_ROUTES.priceDynamic}?region=${data}`);
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

export const fetchGetMockPurchasingActivityIndex = createAsyncThunk(
  'mockPurchasingActivityIndex',
  async (data) => {
    try {
      const response = await axiosRequest.get(`${API_ROUTES.purchasingActivityIndex}?region=${data}`);
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

export const fetchGetMockFreeCashIndex = createAsyncThunk(
  'MockFreeCashIndex',
  async (data) => {
    try {
      const response = await axiosRequest.get(`${API_ROUTES.freeCachIndex}?region=${data}`);
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

export const fetchGetMockAverageCheck = createAsyncThunk(
  'MockAverageCheck',
  async (data) => {
    try {
      const response = await axiosRequest.get(`${API_ROUTES.avarageCheck}?region=${data}`);
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