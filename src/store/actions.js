import {axiosRequest} from "../api/apiConfig";
import {API_ROUTES} from "../api/apiRoutes";
import {createAsyncThunk} from "@reduxjs/toolkit";

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